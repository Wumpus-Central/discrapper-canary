(n.d(t, { Um: () => td, FZ: () => tf }), n(321073));
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c,
    u,
    _,
    E,
    A,
    h,
    f,
    I,
    p,
    T,
    m,
    g,
    S = n(852015),
    N = n(144367),
    C = n(428420),
    O = n(535384),
    R = n(467276),
    L = n(82180);
class y extends O.G {
    constructor() {
        super("google.protobuf.Duration", [
            { no: 1, name: "seconds", kind: "scalar", T: 3 },
            { no: 2, name: "nanos", kind: "scalar", T: 5 },
        ]);
    }
    internalJsonWrite(e, t) {
        let n = L.h.from(e.seconds).toNumber();
        if (n > 315576e6 || n < -315576e6) throw Error("Duration value out of range.");
        let i = e.seconds.toString();
        if (0 !== e.nanos) {
            let t = Math.abs(e.nanos).toString();
            ("000000" === (t = "0".repeat(9 - t.length) + t).substring(3)
                ? (t = t.substring(0, 3))
                : "000" === t.substring(6) && (t = t.substring(0, 6)),
                (i += "." + t));
        }
        return i + "s";
    }
    internalJsonRead(e, t, n) {
        if ("string" != typeof e)
            throw Error("Unable to parse Duration from JSON " + (0, R.V)(e) + ". Expected string.");
        let i = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (null === i) throw Error("Unable to parse Duration from JSON string. Invalid format.");
        n || (n = this.create());
        let r = L.h.from(i[1]);
        if (r.toNumber() > 315576e6 || -315576e6 > r.toNumber())
            throw Error("Unable to parse Duration from JSON string. Value out of range.");
        if (((n.seconds = r.toString()), "string" == typeof i[2])) {
            let e = i[2] + "0".repeat(9 - i[2].length);
            ((n.nanos = parseInt(e)), r.isNegative() && (n.nanos = -n.nanos));
        }
        return n;
    }
    create(e) {
        let t = { seconds: "0", nanos: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.seconds = e.int64().toString();
                    break;
                case 2:
                    r.nanos = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("0" !== e.seconds && t.tag(1, S.O0.Varint).int64(e.seconds),
            0 !== e.nanos && t.tag(2, S.O0.Varint).int32(e.nanos));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let D = new y();
var v = n(406935),
    b =
        (((i = {})[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EXCLUDE = 1)] = "EXCLUDE"),
        (i[(i.OVERRIDE = 2)] = "OVERRIDE"),
        (i[(i.REQUIRE = 3)] = "REQUIRE"),
        (i[(i.ASSIGNMENT = 4)] = "ASSIGNMENT"),
        i),
    P =
        (((r = {})[(r.REGULAR = 0)] = "REGULAR"),
        (r[(r.HOLDOUT = 1)] = "HOLDOUT"),
        (r[(r.ROLLOUT = 2)] = "ROLLOUT"),
        r);
class M extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Rule", [
            { no: 1, name: "type", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Rule.Type", b] },
            { no: 2, name: "filters", kind: "message", repeat: 1, T: () => k },
            { no: 3, name: "override", kind: "message", T: () => G },
            {
                no: 5,
                name: "subtype",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Rule.Subtype", P],
            },
            { no: 6, name: "hash", kind: "scalar", T: 9 },
            { no: 7, name: "title", kind: "message", T: () => v.hU },
        ]);
    }
    create(e) {
        let t = { type: 0, filters: [], subtype: 0, hash: "" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.type = e.int32();
                    break;
                case 2:
                    r.filters.push(k.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 3:
                    r.override = G.internalBinaryRead(e, e.uint32(), n, r.override);
                    break;
                case 5:
                    r.subtype = e.int32();
                    break;
                case 6:
                    r.hash = e.string();
                    break;
                case 7:
                    r.title = v.hU.internalBinaryRead(e, e.uint32(), n, r.title);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.type && t.tag(1, S.O0.Varint).int32(e.type);
        for (let i = 0; i < e.filters.length; i++)
            k.internalBinaryWrite(e.filters[i], t.tag(2, S.O0.LengthDelimited).fork(), n).join();
        (e.override && G.internalBinaryWrite(e.override, t.tag(3, S.O0.LengthDelimited).fork(), n).join(),
            0 !== e.subtype && t.tag(5, S.O0.Varint).int32(e.subtype),
            "" !== e.hash && t.tag(6, S.O0.LengthDelimited).string(e.hash),
            e.title && v.hU.internalBinaryWrite(e.title, t.tag(7, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let U = new M();
class w extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Override", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { variationId: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.variationId = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, S.O0.Varint).int32(e.variationId);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let G = new w();
class x extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Filter", [
            { no: 2, name: "client_version", kind: "message", oneof: "filter", T: () => eC },
            { no: 3, name: "client_os", kind: "message", oneof: "filter", T: () => eA },
            { no: 4, name: "staff", kind: "message", oneof: "filter", T: () => B },
            { no: 5, name: "user_in_guild", kind: "message", oneof: "filter", T: () => H },
            { no: 6, name: "user_ids", kind: "message", oneof: "filter", T: () => W },
            { no: 7, name: "client_locale", kind: "message", oneof: "filter", T: () => z },
            { no: 8, name: "client_location", kind: "message", oneof: "filter", T: () => Q },
            { no: 9, name: "client_ip", kind: "message", oneof: "filter", T: () => ec },
            { no: 10, name: "user_locale", kind: "message", oneof: "filter", T: () => K },
            { no: 11, name: "bot", kind: "message", oneof: "filter", T: () => eG },
            { no: 12, name: "user_age_range", kind: "message", oneof: "filter", T: () => ek },
            { no: 13, name: "user_id_range", kind: "message", oneof: "filter", T: () => eH },
            { no: 14, name: "user_has_flag", kind: "message", oneof: "filter", T: () => eW },
            { no: 15, name: "unit_id_in_range_by_hash", kind: "message", oneof: "filter", T: () => eK },
            { no: 16, name: "client_release_channel", kind: "message", oneof: "filter", T: () => ez },
            { no: 17, name: "always", kind: "message", oneof: "filter", T: () => eQ },
            { no: 18, name: "client_system_locale", kind: "message", oneof: "filter", T: () => q },
            { no: 19, name: "unit_id_in_experiment", kind: "message", oneof: "filter", T: () => e0 },
            { no: 20, name: "user_premium_type", kind: "message", oneof: "filter", T: () => e2 },
            { no: 21, name: "unit_id_matches_filter_snapshot", kind: "message", oneof: "filter", T: () => e5 },
            { no: 22, name: "guild_ids", kind: "message", oneof: "filter", T: () => e6 },
            { no: 23, name: "guild_id_range", kind: "message", oneof: "filter", T: () => te },
            { no: 25, name: "guild_member_count_range", kind: "message", oneof: "filter", T: () => e8 },
            { no: 26, name: "guild_has_feature", kind: "message", oneof: "filter", T: () => tn },
            { no: 27, name: "user_location", kind: "message", oneof: "filter", T: () => es },
            { no: 28, name: "user_ip", kind: "message", oneof: "filter", T: () => e_ },
            { no: 29, name: "installation_ids", kind: "message", oneof: "filter", T: () => tr },
            { no: 31, name: "user_store_country", kind: "message", oneof: "filter", T: () => eo },
            { no: 32, name: "client_design_id", kind: "message", oneof: "filter", T: () => eq },
            { no: 30, name: "negate", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { filter: { oneofKind: void 0 }, negate: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 2:
                    r.filter = {
                        oneofKind: "clientVersion",
                        clientVersion: eC.internalBinaryRead(e, e.uint32(), n, r.filter.clientVersion),
                    };
                    break;
                case 3:
                    r.filter = {
                        oneofKind: "clientOs",
                        clientOs: eA.internalBinaryRead(e, e.uint32(), n, r.filter.clientOs),
                    };
                    break;
                case 4:
                    r.filter = { oneofKind: "staff", staff: B.internalBinaryRead(e, e.uint32(), n, r.filter.staff) };
                    break;
                case 5:
                    r.filter = {
                        oneofKind: "userInGuild",
                        userInGuild: H.internalBinaryRead(e, e.uint32(), n, r.filter.userInGuild),
                    };
                    break;
                case 6:
                    r.filter = {
                        oneofKind: "userIds",
                        userIds: W.internalBinaryRead(e, e.uint32(), n, r.filter.userIds),
                    };
                    break;
                case 7:
                    r.filter = {
                        oneofKind: "clientLocale",
                        clientLocale: z.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocale),
                    };
                    break;
                case 8:
                    r.filter = {
                        oneofKind: "clientLocation",
                        clientLocation: Q.internalBinaryRead(e, e.uint32(), n, r.filter.clientLocation),
                    };
                    break;
                case 9:
                    r.filter = {
                        oneofKind: "clientIp",
                        clientIp: ec.internalBinaryRead(e, e.uint32(), n, r.filter.clientIp),
                    };
                    break;
                case 10:
                    r.filter = {
                        oneofKind: "userLocale",
                        userLocale: K.internalBinaryRead(e, e.uint32(), n, r.filter.userLocale),
                    };
                    break;
                case 11:
                    r.filter = { oneofKind: "bot", bot: eG.internalBinaryRead(e, e.uint32(), n, r.filter.bot) };
                    break;
                case 12:
                    r.filter = {
                        oneofKind: "userAgeRange",
                        userAgeRange: ek.internalBinaryRead(e, e.uint32(), n, r.filter.userAgeRange),
                    };
                    break;
                case 13:
                    r.filter = {
                        oneofKind: "userIdRange",
                        userIdRange: eH.internalBinaryRead(e, e.uint32(), n, r.filter.userIdRange),
                    };
                    break;
                case 14:
                    r.filter = {
                        oneofKind: "userHasFlag",
                        userHasFlag: eW.internalBinaryRead(e, e.uint32(), n, r.filter.userHasFlag),
                    };
                    break;
                case 15:
                    r.filter = {
                        oneofKind: "unitIdInRangeByHash",
                        unitIdInRangeByHash: eK.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInRangeByHash),
                    };
                    break;
                case 16:
                    r.filter = {
                        oneofKind: "clientReleaseChannel",
                        clientReleaseChannel: ez.internalBinaryRead(e, e.uint32(), n, r.filter.clientReleaseChannel),
                    };
                    break;
                case 17:
                    r.filter = {
                        oneofKind: "always",
                        always: eQ.internalBinaryRead(e, e.uint32(), n, r.filter.always),
                    };
                    break;
                case 18:
                    r.filter = {
                        oneofKind: "clientSystemLocale",
                        clientSystemLocale: q.internalBinaryRead(e, e.uint32(), n, r.filter.clientSystemLocale),
                    };
                    break;
                case 19:
                    r.filter = {
                        oneofKind: "unitIdInExperiment",
                        unitIdInExperiment: e0.internalBinaryRead(e, e.uint32(), n, r.filter.unitIdInExperiment),
                    };
                    break;
                case 20:
                    r.filter = {
                        oneofKind: "userPremiumType",
                        userPremiumType: e2.internalBinaryRead(e, e.uint32(), n, r.filter.userPremiumType),
                    };
                    break;
                case 21:
                    r.filter = {
                        oneofKind: "unitIdMatchesFilterSnapshot",
                        unitIdMatchesFilterSnapshot: e5.internalBinaryRead(
                            e,
                            e.uint32(),
                            n,
                            r.filter.unitIdMatchesFilterSnapshot,
                        ),
                    };
                    break;
                case 22:
                    r.filter = {
                        oneofKind: "guildIds",
                        guildIds: e6.internalBinaryRead(e, e.uint32(), n, r.filter.guildIds),
                    };
                    break;
                case 23:
                    r.filter = {
                        oneofKind: "guildIdRange",
                        guildIdRange: te.internalBinaryRead(e, e.uint32(), n, r.filter.guildIdRange),
                    };
                    break;
                case 25:
                    r.filter = {
                        oneofKind: "guildMemberCountRange",
                        guildMemberCountRange: e8.internalBinaryRead(e, e.uint32(), n, r.filter.guildMemberCountRange),
                    };
                    break;
                case 26:
                    r.filter = {
                        oneofKind: "guildHasFeature",
                        guildHasFeature: tn.internalBinaryRead(e, e.uint32(), n, r.filter.guildHasFeature),
                    };
                    break;
                case 27:
                    r.filter = {
                        oneofKind: "userLocation",
                        userLocation: es.internalBinaryRead(e, e.uint32(), n, r.filter.userLocation),
                    };
                    break;
                case 28:
                    r.filter = {
                        oneofKind: "userIp",
                        userIp: e_.internalBinaryRead(e, e.uint32(), n, r.filter.userIp),
                    };
                    break;
                case 29:
                    r.filter = {
                        oneofKind: "installationIds",
                        installationIds: tr.internalBinaryRead(e, e.uint32(), n, r.filter.installationIds),
                    };
                    break;
                case 31:
                    r.filter = {
                        oneofKind: "userStoreCountry",
                        userStoreCountry: eo.internalBinaryRead(e, e.uint32(), n, r.filter.userStoreCountry),
                    };
                    break;
                case 32:
                    r.filter = {
                        oneofKind: "clientDesignId",
                        clientDesignId: eq.internalBinaryRead(e, e.uint32(), n, r.filter.clientDesignId),
                    };
                    break;
                case 30:
                    r.negate = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("clientVersion" === e.filter.oneofKind &&
            eC.internalBinaryWrite(e.filter.clientVersion, t.tag(2, S.O0.LengthDelimited).fork(), n).join(),
            "clientOs" === e.filter.oneofKind &&
                eA.internalBinaryWrite(e.filter.clientOs, t.tag(3, S.O0.LengthDelimited).fork(), n).join(),
            "staff" === e.filter.oneofKind &&
                B.internalBinaryWrite(e.filter.staff, t.tag(4, S.O0.LengthDelimited).fork(), n).join(),
            "userInGuild" === e.filter.oneofKind &&
                H.internalBinaryWrite(e.filter.userInGuild, t.tag(5, S.O0.LengthDelimited).fork(), n).join(),
            "userIds" === e.filter.oneofKind &&
                W.internalBinaryWrite(e.filter.userIds, t.tag(6, S.O0.LengthDelimited).fork(), n).join(),
            "clientLocale" === e.filter.oneofKind &&
                z.internalBinaryWrite(e.filter.clientLocale, t.tag(7, S.O0.LengthDelimited).fork(), n).join(),
            "clientLocation" === e.filter.oneofKind &&
                Q.internalBinaryWrite(e.filter.clientLocation, t.tag(8, S.O0.LengthDelimited).fork(), n).join(),
            "clientIp" === e.filter.oneofKind &&
                ec.internalBinaryWrite(e.filter.clientIp, t.tag(9, S.O0.LengthDelimited).fork(), n).join(),
            "userLocale" === e.filter.oneofKind &&
                K.internalBinaryWrite(e.filter.userLocale, t.tag(10, S.O0.LengthDelimited).fork(), n).join(),
            "bot" === e.filter.oneofKind &&
                eG.internalBinaryWrite(e.filter.bot, t.tag(11, S.O0.LengthDelimited).fork(), n).join(),
            "userAgeRange" === e.filter.oneofKind &&
                ek.internalBinaryWrite(e.filter.userAgeRange, t.tag(12, S.O0.LengthDelimited).fork(), n).join(),
            "userIdRange" === e.filter.oneofKind &&
                eH.internalBinaryWrite(e.filter.userIdRange, t.tag(13, S.O0.LengthDelimited).fork(), n).join(),
            "userHasFlag" === e.filter.oneofKind &&
                eW.internalBinaryWrite(e.filter.userHasFlag, t.tag(14, S.O0.LengthDelimited).fork(), n).join(),
            "unitIdInRangeByHash" === e.filter.oneofKind &&
                eK.internalBinaryWrite(e.filter.unitIdInRangeByHash, t.tag(15, S.O0.LengthDelimited).fork(), n).join(),
            "clientReleaseChannel" === e.filter.oneofKind &&
                ez.internalBinaryWrite(e.filter.clientReleaseChannel, t.tag(16, S.O0.LengthDelimited).fork(), n).join(),
            "always" === e.filter.oneofKind &&
                eQ.internalBinaryWrite(e.filter.always, t.tag(17, S.O0.LengthDelimited).fork(), n).join(),
            "clientSystemLocale" === e.filter.oneofKind &&
                q.internalBinaryWrite(e.filter.clientSystemLocale, t.tag(18, S.O0.LengthDelimited).fork(), n).join(),
            "unitIdInExperiment" === e.filter.oneofKind &&
                e0.internalBinaryWrite(e.filter.unitIdInExperiment, t.tag(19, S.O0.LengthDelimited).fork(), n).join(),
            "userPremiumType" === e.filter.oneofKind &&
                e2.internalBinaryWrite(e.filter.userPremiumType, t.tag(20, S.O0.LengthDelimited).fork(), n).join(),
            "unitIdMatchesFilterSnapshot" === e.filter.oneofKind &&
                e5
                    .internalBinaryWrite(
                        e.filter.unitIdMatchesFilterSnapshot,
                        t.tag(21, S.O0.LengthDelimited).fork(),
                        n,
                    )
                    .join(),
            "guildIds" === e.filter.oneofKind &&
                e6.internalBinaryWrite(e.filter.guildIds, t.tag(22, S.O0.LengthDelimited).fork(), n).join(),
            "guildIdRange" === e.filter.oneofKind &&
                te.internalBinaryWrite(e.filter.guildIdRange, t.tag(23, S.O0.LengthDelimited).fork(), n).join(),
            "guildMemberCountRange" === e.filter.oneofKind &&
                e8
                    .internalBinaryWrite(e.filter.guildMemberCountRange, t.tag(25, S.O0.LengthDelimited).fork(), n)
                    .join(),
            "guildHasFeature" === e.filter.oneofKind &&
                tn.internalBinaryWrite(e.filter.guildHasFeature, t.tag(26, S.O0.LengthDelimited).fork(), n).join(),
            "userLocation" === e.filter.oneofKind &&
                es.internalBinaryWrite(e.filter.userLocation, t.tag(27, S.O0.LengthDelimited).fork(), n).join(),
            "userIp" === e.filter.oneofKind &&
                e_.internalBinaryWrite(e.filter.userIp, t.tag(28, S.O0.LengthDelimited).fork(), n).join(),
            "installationIds" === e.filter.oneofKind &&
                tr.internalBinaryWrite(e.filter.installationIds, t.tag(29, S.O0.LengthDelimited).fork(), n).join(),
            "userStoreCountry" === e.filter.oneofKind &&
                eo.internalBinaryWrite(e.filter.userStoreCountry, t.tag(31, S.O0.LengthDelimited).fork(), n).join(),
            "clientDesignId" === e.filter.oneofKind &&
                eq.internalBinaryWrite(e.filter.clientDesignId, t.tag(32, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.negate && t.tag(30, S.O0.Varint).bool(e.negate));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let k = new x();
class F extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.workAccounts = e.bool();
                    break;
                case 2:
                    r.personalAccounts = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (!1 !== e.workAccounts && t.tag(1, S.O0.Varint).bool(e.workAccounts),
            !1 !== e.personalAccounts && t.tag(2, S.O0.Varint).bool(e.personalAccounts));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let B = new F();
class V extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === S.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let H = new V();
class j extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === S.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;) r.userIds.push(e.fixed64().toString());
                else r.userIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.userIds.length) {
            t.tag(1, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.userIds.length; n++) t.fixed64(e.userIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let W = new j();
class Y extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let K = new Y();
class $ extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let z = new $();
class X extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.locales.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.locales.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.locales[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let q = new X();
class Z extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientLocation",
            [{ no: 1, name: "locations", kind: "message", repeat: 1, T: () => er }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { locations: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.locations.push(er.internalBinaryRead(e, e.uint32(), n));
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            er.internalBinaryWrite(e.locations[i], t.tag(1, S.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let Q = new Z();
class J extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.city = e.string();
                    break;
                case 2:
                    r.subdivision = e.string();
                    break;
                case 3:
                    r.country = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.city && t.tag(1, S.O0.LengthDelimited).string(e.city),
            "" !== e.subdivision && t.tag(2, S.O0.LengthDelimited).string(e.subdivision),
            "" !== e.country && t.tag(3, S.O0.LengthDelimited).string(e.country));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ee = new J();
class et extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.ISORegion", [
            { no: 1, name: "iso_country", kind: "scalar", T: 9 },
            { no: 2, name: "iso_subdivision", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = { isoCountry: "", isoSubdivision: "" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.isoCountry = e.string();
                    break;
                case 2:
                    r.isoSubdivision = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.isoCountry && t.tag(1, S.O0.LengthDelimited).string(e.isoCountry),
            "" !== e.isoSubdivision && t.tag(2, S.O0.LengthDelimited).string(e.isoSubdivision));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let en = new et();
class ei extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientLocation.Location", [
            { no: 1, name: "iso_region", kind: "message", oneof: "location", T: () => en },
            { no: 2, name: "is_eu", kind: "scalar", oneof: "location", T: 8 },
            { no: 3, name: "place", kind: "message", oneof: "location", T: () => ee },
        ]);
    }
    create(e) {
        let t = { location: { oneofKind: void 0 } };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.location = {
                        oneofKind: "isoRegion",
                        isoRegion: en.internalBinaryRead(e, e.uint32(), n, r.location.isoRegion),
                    };
                    break;
                case 2:
                    r.location = { oneofKind: "isEu", isEu: e.bool() };
                    break;
                case 3:
                    r.location = {
                        oneofKind: "place",
                        place: ee.internalBinaryRead(e, e.uint32(), n, r.location.place),
                    };
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("isoRegion" === e.location.oneofKind &&
            en.internalBinaryWrite(e.location.isoRegion, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            "isEu" === e.location.oneofKind && t.tag(2, S.O0.Varint).bool(e.location.isEu),
            "place" === e.location.oneofKind &&
                ee.internalBinaryWrite(e.location.place, t.tag(3, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let er = new ei();
class ea extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserLocation",
            [
                { no: 1, name: "locations", kind: "message", repeat: 1, T: () => er },
                { no: 2, name: "prefer_client_ip", kind: "scalar", T: 8 },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { locations: [], preferClientIp: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.locations.push(er.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.locations.length; i++)
            er.internalBinaryWrite(e.locations[i], t.tag(1, S.O0.LengthDelimited).fork(), n).join();
        !1 !== e.preferClientIp && t.tag(2, S.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let es = new ea();
class el extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserStoreCountry",
            [{ no: 1, name: "iso_countries", kind: "scalar", repeat: 2, T: 9 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = { isoCountries: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.isoCountries.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.isoCountries.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.isoCountries[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eo = new el();
class ed extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.blocks.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.blocks[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ec = new ed();
class eu extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.blocks.push(e.string());
                    break;
                case 2:
                    r.preferClientIp = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.blocks.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.blocks[n]);
        !1 !== e.preferClientIp && t.tag(2, S.O0.Varint).bool(e.preferClientIp);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e_ = new eu();
class eE extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientOperatingSystem",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => ef },
                { no: 2, name: "android_version", kind: "message", T: () => ef },
                { no: 3, name: "macos_version", kind: "message", T: () => ef },
                { no: 4, name: "windows_version", kind: "message", T: () => ef },
                { no: 5, name: "playstation_version", kind: "message", T: () => ef },
                { no: 6, name: "xbox_version", kind: "message", T: () => ef },
                { no: 7, name: "linux_version", kind: "message", T: () => ef },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.iosVersion = ef.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = ef.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.macosVersion = ef.internalBinaryRead(e, e.uint32(), n, r.macosVersion);
                    break;
                case 4:
                    r.windowsVersion = ef.internalBinaryRead(e, e.uint32(), n, r.windowsVersion);
                    break;
                case 5:
                    r.playstationVersion = ef.internalBinaryRead(e, e.uint32(), n, r.playstationVersion);
                    break;
                case 6:
                    r.xboxVersion = ef.internalBinaryRead(e, e.uint32(), n, r.xboxVersion);
                    break;
                case 7:
                    r.linuxVersion = ef.internalBinaryRead(e, e.uint32(), n, r.linuxVersion);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.iosVersion && ef.internalBinaryWrite(e.iosVersion, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                ef.internalBinaryWrite(e.androidVersion, t.tag(2, S.O0.LengthDelimited).fork(), n).join(),
            e.macosVersion && ef.internalBinaryWrite(e.macosVersion, t.tag(3, S.O0.LengthDelimited).fork(), n).join(),
            e.windowsVersion &&
                ef.internalBinaryWrite(e.windowsVersion, t.tag(4, S.O0.LengthDelimited).fork(), n).join(),
            e.playstationVersion &&
                ef.internalBinaryWrite(e.playstationVersion, t.tag(5, S.O0.LengthDelimited).fork(), n).join(),
            e.xboxVersion && ef.internalBinaryWrite(e.xboxVersion, t.tag(6, S.O0.LengthDelimited).fork(), n).join(),
            e.linuxVersion && ef.internalBinaryWrite(e.linuxVersion, t.tag(7, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eA = new eE();
class eh extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => ep },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.ranges.push(ep.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            ep.internalBinaryWrite(e.ranges[i], t.tag(1, S.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, S.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ef = new eh();
class eI extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => em },
            { no: 2, name: "upper_bound", kind: "message", T: () => em },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lowerBound = em.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = em.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.lowerBound && em.internalBinaryWrite(e.lowerBound, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && em.internalBinaryWrite(e.upperBound, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ep = new eI();
class eT extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eS },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.version = eS.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.version && eS.internalBinaryWrite(e.version, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, S.O0.Varint).bool(e.inclusive));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let em = new eT();
class eg extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.SDKVersionSpecifier", [
            { no: 1, name: "version", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { version: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.version = e.int32();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.version && t.tag(1, S.O0.Varint).int32(e.version);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eS = new eg();
class eN extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientPlatform",
            [
                { no: 1, name: "ios_version", kind: "message", T: () => eR },
                { no: 2, name: "android_version", kind: "message", T: () => eR },
                { no: 3, name: "web_version", kind: "message", T: () => eR },
                { no: 4, name: "native_version", kind: "message", T: () => eR },
                { no: 6, name: "allow_non_native_web", kind: "scalar", T: 8 },
                { no: 5, name: "client_required_changes", kind: "message", T: () => eU },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { allowNonNativeWeb: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.iosVersion = eR.internalBinaryRead(e, e.uint32(), n, r.iosVersion);
                    break;
                case 2:
                    r.androidVersion = eR.internalBinaryRead(e, e.uint32(), n, r.androidVersion);
                    break;
                case 3:
                    r.webVersion = eR.internalBinaryRead(e, e.uint32(), n, r.webVersion);
                    break;
                case 4:
                    r.nativeVersion = eR.internalBinaryRead(e, e.uint32(), n, r.nativeVersion);
                    break;
                case 6:
                    r.allowNonNativeWeb = e.bool();
                    break;
                case 5:
                    r.clientRequiredChanges = eU.internalBinaryRead(e, e.uint32(), n, r.clientRequiredChanges);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.iosVersion && eR.internalBinaryWrite(e.iosVersion, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.androidVersion &&
                eR.internalBinaryWrite(e.androidVersion, t.tag(2, S.O0.LengthDelimited).fork(), n).join(),
            e.webVersion && eR.internalBinaryWrite(e.webVersion, t.tag(3, S.O0.LengthDelimited).fork(), n).join(),
            e.nativeVersion && eR.internalBinaryWrite(e.nativeVersion, t.tag(4, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.allowNonNativeWeb && t.tag(6, S.O0.Varint).bool(e.allowNonNativeWeb),
            e.clientRequiredChanges &&
                eU.internalBinaryWrite(e.clientRequiredChanges, t.tag(5, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eC = new eN();
class eO extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersion", [
            { no: 1, name: "ranges", kind: "message", repeat: 1, T: () => ey },
            { no: 2, name: "work_around_pyoto_bug", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { ranges: [], workAroundPyotoBug: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.ranges.push(ey.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.workAroundPyotoBug = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.ranges.length; i++)
            ey.internalBinaryWrite(e.ranges[i], t.tag(1, S.O0.LengthDelimited).fork(), n).join();
        !1 !== e.workAroundPyotoBug && t.tag(2, S.O0.Varint).bool(e.workAroundPyotoBug);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eR = new eO();
class eL extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRange", [
            { no: 1, name: "lower_bound", kind: "message", T: () => ev },
            { no: 2, name: "upper_bound", kind: "message", T: () => ev },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.lowerBound = ev.internalBinaryRead(e, e.uint32(), n, r.lowerBound);
                    break;
                case 2:
                    r.upperBound = ev.internalBinaryRead(e, e.uint32(), n, r.upperBound);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.lowerBound && ev.internalBinaryWrite(e.lowerBound, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.upperBound && ev.internalBinaryWrite(e.upperBound, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ey = new eL();
class eD extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionRangeBound", [
            { no: 1, name: "version", kind: "message", T: () => eP },
            { no: 2, name: "inclusive", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { inclusive: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.version = eP.internalBinaryRead(e, e.uint32(), n, r.version);
                    break;
                case 2:
                    r.inclusive = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.version && eP.internalBinaryWrite(e.version, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.inclusive && t.tag(2, S.O0.Varint).bool(e.inclusive));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ev = new eD();
class eb extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.PlatformVersionSpecifier", [
            { no: 1, name: "major", kind: "scalar", T: 13 },
            { no: 2, name: "minor", kind: "message", T: () => v.ZQ },
            { no: 3, name: "build", kind: "message", T: () => v.ol },
        ]);
    }
    create(e) {
        let t = { major: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.major = e.uint32();
                    break;
                case 2:
                    r.minor = v.ZQ.internalBinaryRead(e, e.uint32(), n, r.minor);
                    break;
                case 3:
                    r.build = v.ol.internalBinaryRead(e, e.uint32(), n, r.build);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.major && t.tag(1, S.O0.Varint).uint32(e.major),
            e.minor && v.ZQ.internalBinaryWrite(e.minor, t.tag(2, S.O0.LengthDelimited).fork(), n).join(),
            e.build && v.ol.internalBinaryWrite(e.build, t.tag(3, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eP = new eb();
class eM extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.ClientRequiredChanges", [
            { no: 1, name: "commit_hashes", kind: "scalar", repeat: 2, T: 9 },
            { no: 2, name: "pr_numbers", kind: "scalar", repeat: 1, T: 5 },
        ]);
    }
    create(e) {
        let t = { commitHashes: [], prNumbers: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.commitHashes.push(e.string());
                    break;
                case 2:
                    if (i === S.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.prNumbers.push(e.int32());
                    else r.prNumbers.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.commitHashes.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.commitHashes[n]);
        if (e.prNumbers.length) {
            t.tag(2, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.prNumbers.length; n++) t.int32(e.prNumbers[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eU = new eM();
class ew extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.isBot = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.isBot && t.tag(1, S.O0.Varint).bool(e.isBot);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eG = new ew();
class ex extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserAgeRange",
            [
                { no: 1, name: "min_age_years", kind: "message", T: () => v.ZQ },
                { no: 2, name: "max_age_years", kind: "message", T: () => v.ZQ },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minAgeYears = v.ZQ.internalBinaryRead(e, e.uint32(), n, r.minAgeYears);
                    break;
                case 2:
                    r.maxAgeYears = v.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxAgeYears);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.minAgeYears && v.ZQ.internalBinaryWrite(e.minAgeYears, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.maxAgeYears && v.ZQ.internalBinaryWrite(e.maxAgeYears, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ek = new ex();
class eF extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Fixed64Value", [
            { no: 1, name: "value", kind: "scalar", T: 6 },
        ]);
    }
    create(e) {
        let t = { value: "0" };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.value && t.tag(1, S.O0.Bit64).fixed64(e.value);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eB = new eF();
class eV extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UserIDRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => eB },
                { no: 2, name: "max_id", kind: "message", T: () => eB },
            ],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_USER" },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minId = eB.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = eB.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.minId && eB.internalBinaryWrite(e.minId, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.maxId && eB.internalBinaryWrite(e.maxId, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eH = new eV();
class ej extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.mask = e.fixed64().toString();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.mask && t.tag(1, S.O0.Bit64).fixed64(e.mask);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eW = new ej();
class eY extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.hashKey = e.string();
                    break;
                case 2:
                    r.stopRingPosition = e.uint32();
                    break;
                case 3:
                    r.startRingPosition = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("" !== e.hashKey && t.tag(1, S.O0.LengthDelimited).string(e.hashKey),
            0 !== e.stopRingPosition && t.tag(2, S.O0.Varint).uint32(e.stopRingPosition),
            0 !== e.startRingPosition && t.tag(3, S.O0.Varint).uint32(e.startRingPosition));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eK = new eY();
class e$ extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.releaseChannels.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.releaseChannels.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.releaseChannels[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let ez = new e$();
class eX extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.ClientDesignId",
            [{ no: 1, name: "design_ids", kind: "scalar", repeat: 1, T: 5 }],
            { "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_CLIENT" },
        );
    }
    create(e) {
        let t = { designIds: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === S.O0.LengthDelimited) for (let t = e.int32() + e.pos; e.pos < t;) r.designIds.push(e.int32());
                else r.designIds.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.designIds.length) {
            t.tag(1, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.designIds.length; n++) t.int32(e.designIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eq = new eX();
class eZ extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Always", [{ no: 1, name: "value", kind: "scalar", T: 8 }], {
            "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
        });
    }
    create(e) {
        let t = { value: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.value = e.bool();
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.value && t.tag(1, S.O0.Varint).bool(e.value);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let eQ = new eZ();
class eJ extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.UnitIdInExperiment",
            [
                { no: 1, name: "experiment_id", kind: "scalar", T: 6 },
                { no: 2, name: "variation_ids", kind: "scalar", repeat: 1, T: 5 },
            ],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_UTILITY",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
            },
        );
    }
    create(e) {
        let t = { experimentId: "0", variationIds: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.experimentId = e.fixed64().toString();
                    break;
                case 2:
                    if (i === S.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.variationIds.push(e.int32());
                    else r.variationIds.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (("0" !== e.experimentId && t.tag(1, S.O0.Bit64).fixed64(e.experimentId), e.variationIds.length)) {
            t.tag(2, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.variationIds.length; n++) t.int32(e.variationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e0 = new eJ();
class e1 extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === S.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;) r.premiumTypes.push(e.int32());
                else r.premiumTypes.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.premiumTypes.length) {
            t.tag(1, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.premiumTypes.length; n++) t.int32(e.premiumTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e2 = new e1();
class e3 extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.filterSnapshotName = e.string();
                    break;
                case 2:
                    if (i === S.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.targetFilterValues.push(e.fixed64().toString());
                    else r.targetFilterValues.push(e.fixed64().toString());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("" !== e.filterSnapshotName && t.tag(1, S.O0.LengthDelimited).string(e.filterSnapshotName),
            e.targetFilterValues.length)
        ) {
            t.tag(2, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.targetFilterValues.length; n++) t.fixed64(e.targetFilterValues[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e5 = new e3();
class e4 extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === S.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;) r.guildIds.push(e.fixed64().toString());
                else r.guildIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.guildIds.length) {
            t.tag(1, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.guildIds.length; n++) t.fixed64(e.guildIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e6 = new e4();
class e7 extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildMemberCountRange",
            [
                { no: 1, name: "min_count", kind: "message", T: () => v.ZQ },
                { no: 2, name: "max_count", kind: "message", T: () => v.ZQ },
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minCount = v.ZQ.internalBinaryRead(e, e.uint32(), n, r.minCount);
                    break;
                case 2:
                    r.maxCount = v.ZQ.internalBinaryRead(e, e.uint32(), n, r.maxCount);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.minCount && v.ZQ.internalBinaryWrite(e.minCount, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.maxCount && v.ZQ.internalBinaryWrite(e.maxCount, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let e8 = new e7();
class e9 extends O.G {
    constructor() {
        super(
            "discord_protos.discord_experimentation.v1.GuildIdRange",
            [
                { no: 1, name: "min_id", kind: "message", T: () => eB },
                { no: 2, name: "max_id", kind: "message", T: () => eB },
            ],
            {
                "discord_protos.discord_experimentation.v1.filter_category": "FILTER_CATEGORY_GUILD",
                "discord_protos.discord_experimentation.v1.filter_evaluation_mode": "FILTER_EVALUATION_MODE_LAZY",
            },
        );
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.minId = eB.internalBinaryRead(e, e.uint32(), n, r.minId);
                    break;
                case 2:
                    r.maxId = eB.internalBinaryRead(e, e.uint32(), n, r.maxId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.minId && eB.internalBinaryWrite(e.minId, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.maxId && eB.internalBinaryWrite(e.maxId, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let te = new e9();
class tt extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t) r.features.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.features.length; n++) t.tag(1, S.O0.LengthDelimited).string(e.features[n]);
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tn = new tt();
class ti extends O.G {
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
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === S.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t;) r.installationIds.push(e.fixed64().toString());
                else r.installationIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let s = e.skip(i);
                !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.installationIds.length) {
            t.tag(1, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.installationIds.length; n++) t.fixed64(e.installationIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tr = new ti();
var ta = n(335871),
    ts =
        (((a = {})[(a.EXCLUSIVE = 0)] = "EXCLUSIVE"),
        (a[(a.SYNCED = 1)] = "SYNCED"),
        (a[(a.PRE_ALLOCATED = 2)] = "PRE_ALLOCATED"),
        a),
    tl =
        (((s = {})[(s.CHANGE_SOURCE_UNSPECIFIED = 0)] = "CHANGE_SOURCE_UNSPECIFIED"),
        (s[(s.MANUAL = 1)] = "MANUAL"),
        (s[(s.CAP_PROPOSED = 2)] = "CAP_PROPOSED"),
        (s[(s.CAP_PROPOSED_WITH_MODIFICATIONS = 3)] = "CAP_PROPOSED_WITH_MODIFICATIONS"),
        (s[(s.CAP_AUTOMATED = 4)] = "CAP_AUTOMATED"),
        s),
    to =
        (((l = {})[(l.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (l[(l.USER = 1)] = "USER"),
        (l[(l.INSTALLATION = 2)] = "INSTALLATION"),
        (l[(l.GUILD = 3)] = "GUILD"),
        (l[(l.CUSTOM = 4)] = "CUSTOM"),
        l),
    td =
        (((o = {})[(o.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
        (o[(o.API = 1)] = "API"),
        (o[(o.APP = 2)] = "APP"),
        (o[(o.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
        (o[(o.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
        (o[(o.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
        (o[(o.AV_WORKER = 6)] = "AV_WORKER"),
        (o[(o.SEO = 7)] = "SEO"),
        (o[(o.MARKETING = 8)] = "MARKETING"),
        (o[(o.DESIGN_DOCS = 9)] = "DESIGN_DOCS"),
        o),
    tc = (((d = {})[(d.ENABLED = 0)] = "ENABLED"), (d[(d.DISABLED = 1)] = "DISABLED"), d),
    tu =
        (((c = {})[(c.FULL = 0)] = "FULL"),
        (c[(c.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
        (c[(c.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
        (c[(c.OFF = 5)] = "OFF"),
        c),
    t_ =
        (((u = {})[(u.DEFAULT = 0)] = "DEFAULT"),
        (u[(u.HOLDOUT = 1)] = "HOLDOUT"),
        (u[(u.NUMBERLINE = 2)] = "NUMBERLINE"),
        u),
    tE =
        (((_ = {})[(_.CUSTOM_UNIT_PREFIX_UNSPECIFIED = 0)] = "CUSTOM_UNIT_PREFIX_UNSPECIFIED"),
        (_[(_.SEO_URL_SLUG = 1)] = "SEO_URL_SLUG"),
        _),
    tA =
        (((E = {})[(E.EXPOSURE_POINT_ID_UNSPECIFIED = 0)] = "EXPOSURE_POINT_ID_UNSPECIFIED"),
        (E[(E.SEO_INSTALLATION_PAGE_LOAD = 1)] = "SEO_INSTALLATION_PAGE_LOAD"),
        (E[(E.MARKETING_INSTALLATION_PAGE_LOAD = 2)] = "MARKETING_INSTALLATION_PAGE_LOAD"),
        (E[(E.INVITE_GUILD_RESOLVE = 3)] = "INVITE_GUILD_RESOLVE"),
        (E[(E.ADS_BUDGET_AB_DECISION = 4)] = "ADS_BUDGET_AB_DECISION"),
        E),
    th =
        (((A = {})[(A.DEFAULT = 0)] = "DEFAULT"),
        (A[(A.OFF = 1)] = "OFF"),
        (A[(A.OVERRIDES_ONLY = 2)] = "OVERRIDES_ONLY"),
        A),
    tf =
        (((h = {})[(h.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (h[(h.CONTROL = 1)] = "CONTROL"),
        (h[(h.TREATMENT = 2)] = "TREATMENT"),
        (h[(h.OVERRIDE = 3)] = "OVERRIDE"),
        h),
    tI =
        (((f = {})[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.FULL = 1)] = "FULL"),
        (f[(f.FORCE_CONTROL = 2)] = "FORCE_CONTROL"),
        (f[(f.OFF = 3)] = "OFF"),
        f),
    tp =
        (((I = {})[(I.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (I[(I.ENABLED = 1)] = "ENABLED"),
        (I[(I.DISABLED = 2)] = "DISABLED"),
        I),
    tT =
        (((p = {})[(p.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (p[(p.ACTIVE = 1)] = "ACTIVE"),
        (p[(p.UNUSED = 2)] = "UNUSED"),
        (p[(p.BURNED = 3)] = "BURNED"),
        (p[(p.PRESERVED = 4)] = "PRESERVED"),
        p),
    tm =
        (((T = {})[(T.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (T[(T.DRAFT = 1)] = "DRAFT"),
        (T[(T.ACTIVE = 2)] = "ACTIVE"),
        (T[(T.PAUSED_MANUAL = 3)] = "PAUSED_MANUAL"),
        (T[(T.PAUSED_HEALTH_CHECK = 4)] = "PAUSED_HEALTH_CHECK"),
        (T[(T.COMPLETED = 5)] = "COMPLETED"),
        (T[(T.CANCELED = 6)] = "CANCELED"),
        T),
    tg =
        (((m = {})[(m.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (m[(m.PENDING = 1)] = "PENDING"),
        (m[(m.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (m[(m.AWAITING_MANUAL_APPROVAL = 3)] = "AWAITING_MANUAL_APPROVAL"),
        (m[(m.COMPLETED = 4)] = "COMPLETED"),
        m),
    tS =
        (((g = {})[(g.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (g[(g.DRAFT = 1)] = "DRAFT"),
        (g[(g.MEASUREMENT = 2)] = "MEASUREMENT"),
        (g[(g.ROLLING_OUT = 4)] = "ROLLING_OUT"),
        (g[(g.ARCHIVED = 6)] = "ARCHIVED"),
        (g[(g.AA_MODE = 7)] = "AA_MODE"),
        (g[(g.PAUSED = 8)] = "PAUSED"),
        g);
class tN extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            { no: 1, name: "id", kind: "scalar", T: 6 },
            { no: 2, name: "name", kind: "scalar", T: 9 },
            { no: 3, name: "created_at", kind: "message", T: () => ta.D },
            { no: 4, name: "creator_id", kind: "scalar", T: 6 },
            { no: 5, name: "version", kind: "scalar", T: 5 },
            { no: 6, name: "edited_at", kind: "message", T: () => ta.D },
            { no: 7, name: "editor_id", kind: "scalar", T: 6 },
            { no: 8, name: "title", kind: "scalar", T: 9 },
            { no: 9, name: "description", kind: "scalar", T: 9 },
            { no: 10, name: "hypothesis", kind: "message", T: () => v.hU },
            { no: 11, name: "tech_spec_link", kind: "message", T: () => v.hU },
            { no: 12, name: "revision", kind: "scalar", T: 5 },
            { no: 13, name: "hash_key", kind: "scalar", T: 9 },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", to],
            },
            { no: 15, name: "variations", kind: "message", repeat: 1, T: () => tD },
            { no: 16, name: "rules", kind: "message", repeat: 1, T: () => U },
            { no: 18, name: "phase", kind: "enum", T: () => ["discord_protos.discord_experimentation.v1.Phase", tS] },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", td],
            },
            { no: 20, name: "owning_team_id", kind: "scalar", T: 9 },
            { no: 21, name: "cached_notification_channel_id", kind: "scalar", T: 6 },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", tc],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", tu],
            },
            { no: 23, name: "enable_edit_raw_json_ui", kind: "scalar", T: 8 },
            { no: 46, name: "dynamic_config_size_limit_override", kind: "message", T: () => v.as },
            { no: 24, name: "winning_variation_id", kind: "scalar", T: 5 },
            { no: 34, name: "extra_outcome_context", kind: "scalar", T: 9 },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", t_],
            },
            { no: 27, name: "is_template", kind: "scalar", T: 8 },
            { no: 28, name: "field_numbers_to_copy", kind: "scalar", repeat: 1, T: 5 },
            { no: 29, name: "engine_feature_flags", kind: "scalar", repeat: 2, T: 9 },
            { no: 30, name: "debug_config", kind: "message", T: () => tw },
            { no: 31, name: "expected_end_date", kind: "message", T: () => ta.D },
            { no: 32, name: "is_automated_change", kind: "scalar", T: 8 },
            { no: 44, name: "suppress_editor_mention", kind: "scalar", T: 8 },
            { no: 33, name: "archive_at", kind: "message", T: () => ta.D },
            { no: 35, name: "guild_experiment_version", kind: "message", T: () => v.as },
            {
                no: 36,
                name: "custom_unit_prefix",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.CustomUnitPrefix", tE],
            },
            {
                no: 45,
                name: "exposure_points",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposurePointId", tA],
            },
            { no: 47, name: "dynamic_config_model", kind: "scalar", T: 9 },
            { no: 37, name: "growthbook_tags", kind: "scalar", repeat: 2, T: 9 },
            { no: 38, name: "allocate_right_to_left", kind: "scalar", T: 8 },
            { no: 39, name: "is_managed", kind: "scalar", T: 8 },
            { no: 43, name: "number_line_settings", kind: "message", T: () => tO },
            {
                no: 42,
                name: "eligibility_persistence",
                kind: "enum",
                T: () => [
                    "discord_protos.discord_experimentation.v1.Experiment.EligibilityPersistence",
                    th,
                    "ELIGIBILITY_PERSISTENCE_",
                ],
            },
            { no: 48, name: "lifecycle_plan", kind: "message", T: () => tx },
            { no: 49, name: "is_feature_flag", kind: "scalar", T: 8 },
            { no: 50, name: "is_official_holdout", kind: "scalar", T: 8 },
            { no: 51, name: "change_source", kind: "message", T: () => tL },
        ]);
    }
    create(e) {
        let t = {
            id: "0",
            name: "",
            creatorId: "0",
            version: 0,
            editorId: "0",
            title: "",
            description: "",
            revision: 0,
            hashKey: "",
            unitType: 0,
            variations: [],
            rules: [],
            phase: 0,
            surfaces: [],
            owningTeamId: "",
            cachedNotificationChannelId: "0",
            exposureTracking: 0,
            assignmentMode: 0,
            enableEditRawJsonUi: !1,
            winningVariationId: 0,
            extraOutcomeContext: "",
            type: 0,
            isTemplate: !1,
            fieldNumbersToCopy: [],
            engineFeatureFlags: [],
            isAutomatedChange: !1,
            suppressEditorMention: !1,
            customUnitPrefix: 0,
            exposurePoints: [],
            dynamicConfigModel: "",
            growthbookTags: [],
            allocateRightToLeft: !1,
            isManaged: !1,
            eligibilityPersistence: 0,
            isFeatureFlag: !1,
            isOfficialHoldout: !1,
        };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.id = e.fixed64().toString();
                    break;
                case 2:
                    r.name = e.string();
                    break;
                case 3:
                    r.createdAt = ta.D.internalBinaryRead(e, e.uint32(), n, r.createdAt);
                    break;
                case 4:
                    r.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    r.version = e.int32();
                    break;
                case 6:
                    r.editedAt = ta.D.internalBinaryRead(e, e.uint32(), n, r.editedAt);
                    break;
                case 7:
                    r.editorId = e.fixed64().toString();
                    break;
                case 8:
                    r.title = e.string();
                    break;
                case 9:
                    r.description = e.string();
                    break;
                case 10:
                    r.hypothesis = v.hU.internalBinaryRead(e, e.uint32(), n, r.hypothesis);
                    break;
                case 11:
                    r.techSpecLink = v.hU.internalBinaryRead(e, e.uint32(), n, r.techSpecLink);
                    break;
                case 12:
                    r.revision = e.int32();
                    break;
                case 13:
                    r.hashKey = e.string();
                    break;
                case 14:
                    r.unitType = e.int32();
                    break;
                case 15:
                    r.variations.push(tD.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    r.rules.push(U.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    r.phase = e.int32();
                    break;
                case 19:
                    if (i === S.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.surfaces.push(e.int32());
                    else r.surfaces.push(e.int32());
                    break;
                case 20:
                    r.owningTeamId = e.string();
                    break;
                case 21:
                    r.cachedNotificationChannelId = e.fixed64().toString();
                    break;
                case 22:
                    r.exposureTracking = e.int32();
                    break;
                case 25:
                    r.assignmentMode = e.int32();
                    break;
                case 23:
                    r.enableEditRawJsonUi = e.bool();
                    break;
                case 46:
                    r.dynamicConfigSizeLimitOverride = v.as.internalBinaryRead(
                        e,
                        e.uint32(),
                        n,
                        r.dynamicConfigSizeLimitOverride,
                    );
                    break;
                case 24:
                    r.winningVariationId = e.int32();
                    break;
                case 34:
                    r.extraOutcomeContext = e.string();
                    break;
                case 26:
                    r.type = e.int32();
                    break;
                case 27:
                    r.isTemplate = e.bool();
                    break;
                case 28:
                    if (i === S.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.fieldNumbersToCopy.push(e.int32());
                    else r.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    r.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    r.debugConfig = tw.internalBinaryRead(e, e.uint32(), n, r.debugConfig);
                    break;
                case 31:
                    r.expectedEndDate = ta.D.internalBinaryRead(e, e.uint32(), n, r.expectedEndDate);
                    break;
                case 32:
                    r.isAutomatedChange = e.bool();
                    break;
                case 44:
                    r.suppressEditorMention = e.bool();
                    break;
                case 33:
                    r.archiveAt = ta.D.internalBinaryRead(e, e.uint32(), n, r.archiveAt);
                    break;
                case 35:
                    r.guildExperimentVersion = v.as.internalBinaryRead(e, e.uint32(), n, r.guildExperimentVersion);
                    break;
                case 36:
                    r.customUnitPrefix = e.int32();
                    break;
                case 45:
                    if (i === S.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t;) r.exposurePoints.push(e.int32());
                    else r.exposurePoints.push(e.int32());
                    break;
                case 47:
                    r.dynamicConfigModel = e.string();
                    break;
                case 37:
                    r.growthbookTags.push(e.string());
                    break;
                case 38:
                    r.allocateRightToLeft = e.bool();
                    break;
                case 39:
                    r.isManaged = e.bool();
                    break;
                case 43:
                    r.numberLineSettings = tO.internalBinaryRead(e, e.uint32(), n, r.numberLineSettings);
                    break;
                case 42:
                    r.eligibilityPersistence = e.int32();
                    break;
                case 48:
                    r.lifecyclePlan = tx.internalBinaryRead(e, e.uint32(), n, r.lifecyclePlan);
                    break;
                case 49:
                    r.isFeatureFlag = e.bool();
                    break;
                case 50:
                    r.isOfficialHoldout = e.bool();
                    break;
                case 51:
                    r.changeSource = tL.internalBinaryRead(e, e.uint32(), n, r.changeSource);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        ("0" !== e.id && t.tag(1, S.O0.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, S.O0.LengthDelimited).string(e.name),
            e.createdAt && ta.D.internalBinaryWrite(e.createdAt, t.tag(3, S.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, S.O0.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, S.O0.Varint).int32(e.version),
            e.editedAt && ta.D.internalBinaryWrite(e.editedAt, t.tag(6, S.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, S.O0.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, S.O0.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, S.O0.LengthDelimited).string(e.description),
            e.hypothesis && v.hU.internalBinaryWrite(e.hypothesis, t.tag(10, S.O0.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                v.hU.internalBinaryWrite(e.techSpecLink, t.tag(11, S.O0.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, S.O0.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, S.O0.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, S.O0.Varint).int32(e.unitType));
        for (let i = 0; i < e.variations.length; i++)
            tD.internalBinaryWrite(e.variations[i], t.tag(15, S.O0.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            U.internalBinaryWrite(e.rules[i], t.tag(16, S.O0.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, S.O0.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, S.O0.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, S.O0.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, S.O0.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, S.O0.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, S.O0.Varint).bool(e.enableEditRawJsonUi),
            e.dynamicConfigSizeLimitOverride &&
                v.as
                    .internalBinaryWrite(e.dynamicConfigSizeLimitOverride, t.tag(46, S.O0.LengthDelimited).fork(), n)
                    .join(),
            0 !== e.winningVariationId && t.tag(24, S.O0.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, S.O0.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, S.O0.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, S.O0.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, S.O0.LengthDelimited).string(e.engineFeatureFlags[n]);
        if (
            (e.debugConfig && tw.internalBinaryWrite(e.debugConfig, t.tag(30, S.O0.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                ta.D.internalBinaryWrite(e.expectedEndDate, t.tag(31, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, S.O0.Varint).bool(e.isAutomatedChange),
            !1 !== e.suppressEditorMention && t.tag(44, S.O0.Varint).bool(e.suppressEditorMention),
            e.archiveAt && ta.D.internalBinaryWrite(e.archiveAt, t.tag(33, S.O0.LengthDelimited).fork(), n).join(),
            e.guildExperimentVersion &&
                v.as.internalBinaryWrite(e.guildExperimentVersion, t.tag(35, S.O0.LengthDelimited).fork(), n).join(),
            0 !== e.customUnitPrefix && t.tag(36, S.O0.Varint).int32(e.customUnitPrefix),
            e.exposurePoints.length)
        ) {
            t.tag(45, S.O0.LengthDelimited).fork();
            for (let n = 0; n < e.exposurePoints.length; n++) t.int32(e.exposurePoints[n]);
            t.join();
        }
        "" !== e.dynamicConfigModel && t.tag(47, S.O0.LengthDelimited).string(e.dynamicConfigModel);
        for (let n = 0; n < e.growthbookTags.length; n++) t.tag(37, S.O0.LengthDelimited).string(e.growthbookTags[n]);
        (!1 !== e.allocateRightToLeft && t.tag(38, S.O0.Varint).bool(e.allocateRightToLeft),
            !1 !== e.isManaged && t.tag(39, S.O0.Varint).bool(e.isManaged),
            e.numberLineSettings &&
                tO.internalBinaryWrite(e.numberLineSettings, t.tag(43, S.O0.LengthDelimited).fork(), n).join(),
            0 !== e.eligibilityPersistence && t.tag(42, S.O0.Varint).int32(e.eligibilityPersistence),
            e.lifecyclePlan &&
                tx.internalBinaryWrite(e.lifecyclePlan, t.tag(48, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.isFeatureFlag && t.tag(49, S.O0.Varint).bool(e.isFeatureFlag),
            !1 !== e.isOfficialHoldout && t.tag(50, S.O0.Varint).bool(e.isOfficialHoldout),
            e.changeSource && tL.internalBinaryWrite(e.changeSource, t.tag(51, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
new tN();
class tC extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings", [
            {
                no: 1,
                name: "mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.NumberLineSettings.Mode", ts],
            },
            { no: 2, name: "linked_id", kind: "scalar", T: 6 },
            { no: 3, name: "shared_control", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { mode: 0, linkedId: "0", sharedControl: !1 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.mode = e.int32();
                    break;
                case 2:
                    r.linkedId = e.fixed64().toString();
                    break;
                case 3:
                    r.sharedControl = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.mode && t.tag(1, S.O0.Varint).int32(e.mode),
            "0" !== e.linkedId && t.tag(2, S.O0.Bit64).fixed64(e.linkedId),
            !1 !== e.sharedControl && t.tag(3, S.O0.Varint).bool(e.sharedControl));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tO = new tC();
class tR extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment.ChangeSource", [
            {
                no: 1,
                name: "kind",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ChangeSource.Kind", tl],
            },
            { no: 2, name: "proposal_id", kind: "scalar", T: 9 },
            { no: 3, name: "agent_product", kind: "scalar", T: 9 },
            { no: 4, name: "conversation_id", kind: "scalar", T: 9 },
            { no: 5, name: "skill", kind: "scalar", T: 9 },
            { no: 6, name: "skill_version", kind: "scalar", T: 9 },
            { no: 7, name: "conversation_type", kind: "scalar", T: 9 },
        ]);
    }
    create(e) {
        let t = {
            kind: 0,
            proposalId: "",
            agentProduct: "",
            conversationId: "",
            skill: "",
            skillVersion: "",
            conversationType: "",
        };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.kind = e.int32();
                    break;
                case 2:
                    r.proposalId = e.string();
                    break;
                case 3:
                    r.agentProduct = e.string();
                    break;
                case 4:
                    r.conversationId = e.string();
                    break;
                case 5:
                    r.skill = e.string();
                    break;
                case 6:
                    r.skillVersion = e.string();
                    break;
                case 7:
                    r.conversationType = e.string();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.kind && t.tag(1, S.O0.Varint).int32(e.kind),
            "" !== e.proposalId && t.tag(2, S.O0.LengthDelimited).string(e.proposalId),
            "" !== e.agentProduct && t.tag(3, S.O0.LengthDelimited).string(e.agentProduct),
            "" !== e.conversationId && t.tag(4, S.O0.LengthDelimited).string(e.conversationId),
            "" !== e.skill && t.tag(5, S.O0.LengthDelimited).string(e.skill),
            "" !== e.skillVersion && t.tag(6, S.O0.LengthDelimited).string(e.skillVersion),
            "" !== e.conversationType && t.tag(7, S.O0.LengthDelimited).string(e.conversationType));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tL = new tR();
class ty extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            { no: 1, name: "id", kind: "scalar", T: 5 },
            { no: 2, name: "label", kind: "scalar", T: 9 },
            { no: 3, name: "target_allocation", kind: "scalar", T: 5 },
            { no: 4, name: "buckets", kind: "message", repeat: 1, T: () => tb },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", tf],
            },
            { no: 6, name: "configuration", kind: "message", T: () => v.hU },
            { no: 7, name: "owning_experiment_id", kind: "scalar", T: 6 },
            { no: 8, name: "owning_slot_id", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = {
            id: 0,
            label: "",
            targetAllocation: 0,
            buckets: [],
            type: 0,
            owningExperimentId: "0",
            owningSlotId: 0,
        };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.id = e.int32();
                    break;
                case 2:
                    r.label = e.string();
                    break;
                case 3:
                    r.targetAllocation = e.int32();
                    break;
                case 4:
                    r.buckets.push(tb.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    r.type = e.int32();
                    break;
                case 6:
                    r.configuration = v.hU.internalBinaryRead(e, e.uint32(), n, r.configuration);
                    break;
                case 7:
                    r.owningExperimentId = e.fixed64().toString();
                    break;
                case 8:
                    r.owningSlotId = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.id && t.tag(1, S.O0.Varint).int32(e.id),
            "" !== e.label && t.tag(2, S.O0.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, S.O0.Varint).int32(e.targetAllocation));
        for (let i = 0; i < e.buckets.length; i++)
            tb.internalBinaryWrite(e.buckets[i], t.tag(4, S.O0.LengthDelimited).fork(), n).join();
        (0 !== e.type && t.tag(5, S.O0.Varint).int32(e.type),
            e.configuration &&
                v.hU.internalBinaryWrite(e.configuration, t.tag(6, S.O0.LengthDelimited).fork(), n).join(),
            "0" !== e.owningExperimentId && t.tag(7, S.O0.Bit64).fixed64(e.owningExperimentId),
            0 !== e.owningSlotId && t.tag(8, S.O0.Varint).int32(e.owningSlotId));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tD = new ty();
class tv extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            { no: 1, name: "start", kind: "scalar", T: 5 },
            { no: 2, name: "stop", kind: "scalar", T: 5 },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", tT],
            },
            {
                no: 5,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.AllocationAssignmentMode.Enum", tI],
            },
            {
                no: 6,
                name: "exposure_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.AllocationExposureMode.Enum", tp],
            },
        ]);
    }
    create(e) {
        let t = { start: 0, stop: 0, type: 0, assignmentMode: 0, exposureMode: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.start = e.int32();
                    break;
                case 2:
                    r.stop = e.int32();
                    break;
                case 3:
                    r.type = e.int32();
                    break;
                case 5:
                    r.assignmentMode = e.int32();
                    break;
                case 6:
                    r.exposureMode = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (0 !== e.start && t.tag(1, S.O0.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, S.O0.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, S.O0.Varint).int32(e.type),
            0 !== e.assignmentMode && t.tag(5, S.O0.Varint).int32(e.assignmentMode),
            0 !== e.exposureMode && t.tag(6, S.O0.Varint).int32(e.exposureMode));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tb = new tv();
class tP extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket.AllocationAssignmentMode", []);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        return i ?? this.create();
    }
    internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
new tP();
class tM extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket.AllocationExposureMode", []);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        return i ?? this.create();
    }
    internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
new tM();
class tU extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.DebugConfig", [
            { no: 1, name: "enable_decision_logging", kind: "scalar", T: 8 },
            { no: 2, name: "metrics_sample_rate", kind: "scalar", T: 1 },
            { no: 3, name: "log_context_on_failure", kind: "scalar", T: 8 },
            { no: 4, name: "log_raw_headers", kind: "scalar", T: 8 },
            { no: 5, name: "tag_filter_metrics", kind: "scalar", T: 8 },
            { no: 6, name: "decision_log_sample_rate", kind: "scalar", T: 1 },
        ]);
    }
    create(e) {
        let t = {
            enableDecisionLogging: !1,
            metricsSampleRate: 0,
            logContextOnFailure: !1,
            logRawHeaders: !1,
            tagFilterMetrics: !1,
            decisionLogSampleRate: 0,
        };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.enableDecisionLogging = e.bool();
                    break;
                case 2:
                    r.metricsSampleRate = e.double();
                    break;
                case 3:
                    r.logContextOnFailure = e.bool();
                    break;
                case 4:
                    r.logRawHeaders = e.bool();
                    break;
                case 5:
                    r.tagFilterMetrics = e.bool();
                    break;
                case 6:
                    r.decisionLogSampleRate = e.double();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (!1 !== e.enableDecisionLogging && t.tag(1, S.O0.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, S.O0.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, S.O0.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, S.O0.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, S.O0.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, S.O0.Bit64).double(e.decisionLogSampleRate));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tw = new tU();
class tG extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.LifecyclePlan", [
            { no: 1, name: "measurement_plan", kind: "message", T: () => tF },
            { no: 2, name: "rollout_plan", kind: "message", T: () => tV },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.measurementPlan = tF.internalBinaryRead(e, e.uint32(), n, r.measurementPlan);
                    break;
                case 2:
                    r.rolloutPlan = tV.internalBinaryRead(e, e.uint32(), n, r.rolloutPlan);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        (e.measurementPlan &&
            tF.internalBinaryWrite(e.measurementPlan, t.tag(1, S.O0.LengthDelimited).fork(), n).join(),
            e.rolloutPlan && tV.internalBinaryWrite(e.rolloutPlan, t.tag(2, S.O0.LengthDelimited).fork(), n).join());
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tx = new tG();
class tk extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.LifecyclePlan.MeasurementPlan", [
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.LifecyclePlan.PlanStatus", tm, "PLAN_STATUS_"],
            },
            { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: () => tj },
        ]);
    }
    create(e) {
        let t = { status: 0, rampSteps: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.status = e.int32();
                    break;
                case 2:
                    r.rampSteps.push(tj.internalBinaryRead(e, e.uint32(), n));
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.status && t.tag(1, S.O0.Varint).int32(e.status);
        for (let i = 0; i < e.rampSteps.length; i++)
            tj.internalBinaryWrite(e.rampSteps[i], t.tag(2, S.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tF = new tk();
class tB extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.LifecyclePlan.RolloutPlan", [
            {
                no: 1,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.LifecyclePlan.PlanStatus", tm, "PLAN_STATUS_"],
            },
            { no: 2, name: "ramp_steps", kind: "message", repeat: 1, T: () => tj },
        ]);
    }
    create(e) {
        let t = { status: 0, rampSteps: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.status = e.int32();
                    break;
                case 2:
                    r.rampSteps.push(tj.internalBinaryRead(e, e.uint32(), n));
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.status && t.tag(1, S.O0.Varint).int32(e.status);
        for (let i = 0; i < e.rampSteps.length; i++)
            tj.internalBinaryWrite(e.rampSteps[i], t.tag(2, S.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tV = new tB();
class tH extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.LifecyclePlan.RampStep", [
            { no: 1, name: "variation_buckets", kind: "message", repeat: 1, T: () => tY },
            { no: 2, name: "hold_duration", kind: "message", T: () => D },
            { no: 3, name: "require_manual_approval", kind: "scalar", T: 8 },
            { no: 4, name: "started_at", kind: "message", T: () => ta.D },
            {
                no: 5,
                name: "status",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.LifecyclePlan.StepStatus", tg, "STEP_STATUS_"],
            },
        ]);
    }
    create(e) {
        let t = { variationBuckets: [], requireManualApproval: !1, status: 0 };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.variationBuckets.push(tY.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 2:
                    r.holdDuration = D.internalBinaryRead(e, e.uint32(), n, r.holdDuration);
                    break;
                case 3:
                    r.requireManualApproval = e.bool();
                    break;
                case 4:
                    r.startedAt = ta.D.internalBinaryRead(e, e.uint32(), n, r.startedAt);
                    break;
                case 5:
                    r.status = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let i = 0; i < e.variationBuckets.length; i++)
            tY.internalBinaryWrite(e.variationBuckets[i], t.tag(1, S.O0.LengthDelimited).fork(), n).join();
        (e.holdDuration && D.internalBinaryWrite(e.holdDuration, t.tag(2, S.O0.LengthDelimited).fork(), n).join(),
            !1 !== e.requireManualApproval && t.tag(3, S.O0.Varint).bool(e.requireManualApproval),
            e.startedAt && ta.D.internalBinaryWrite(e.startedAt, t.tag(4, S.O0.LengthDelimited).fork(), n).join(),
            0 !== e.status && t.tag(5, S.O0.Varint).int32(e.status));
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tj = new tH();
class tW extends O.G {
    constructor() {
        super("discord_protos.discord_experimentation.v1.LifecyclePlan.VariationBuckets", [
            { no: 1, name: "variation_id", kind: "scalar", T: 5 },
            { no: 2, name: "buckets", kind: "message", repeat: 1, T: () => tb },
        ]);
    }
    create(e) {
        let t = { variationId: 0, buckets: [] };
        return (
            globalThis.Object.defineProperty(t, C.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, N.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a;) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.variationId = e.int32();
                    break;
                case 2:
                    r.buckets.push(tb.internalBinaryRead(e, e.uint32(), n));
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let s = e.skip(i);
                    !1 !== a && (!0 === a ? S.f$.onRead : a)(this.typeName, r, t, i, s);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.variationId && t.tag(1, S.O0.Varint).int32(e.variationId);
        for (let i = 0; i < e.buckets.length; i++)
            tb.internalBinaryWrite(e.buckets[i], t.tag(2, S.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return (!1 !== i && (!0 == i ? S.f$.onWrite : i)(this.typeName, e, t), t);
    }
}
let tY = new tW();
