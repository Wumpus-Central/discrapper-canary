"use strict";
n.d(t, { ew: () => y }), n(321073);
var r = n(852015),
    i = n(144367),
    s = n(428420),
    a = n(324281),
    o = n(406935),
    l = n(56426),
    u = n(335871),
    c = (function (e) {
        return (
            (e[(e.REASON_UNSPECIFIED = 0)] = "REASON_UNSPECIFIED"),
            (e[(e.DISABLED_SUSPICIOUS_ACTIVITY = 1)] = "DISABLED_SUSPICIOUS_ACTIVITY"),
            (e[(e.SMITE_REMOVE_EMAIL_VERIFICATION = 2)] = "SMITE_REMOVE_EMAIL_VERIFICATION"),
            (e[(e.USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT = 3)] =
                "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT"),
            (e[(e.ACTIVE_ASSIGNMENT_COMPLETED = 4)] = "ACTIVE_ASSIGNMENT_COMPLETED"),
            (e[(e.ACTIVE_ASSIGNMENT_CREATED = 5)] = "ACTIVE_ASSIGNMENT_CREATED"),
            (e[(e.DEFERRED_ASSIGNMENT_CREATED = 6)] = "DEFERRED_ASSIGNMENT_CREATED"),
            (e[(e.DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE = 7)] = "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE"),
            (e[(e.DEFERRED_ASSIGNMENT_CANCELLED = 8)] = "DEFERRED_ASSIGNMENT_CANCELLED"),
            (e[(e.ASSIGNMENT_STATE_REPAIRED = 9)] = "ASSIGNMENT_STATE_REPAIRED"),
            (e[(e.MANUAL_PERMANENT_BAN = 10)] = "MANUAL_PERMANENT_BAN"),
            (e[(e.SAFETY_SYSTEM_UNBAN = 11)] = "SAFETY_SYSTEM_UNBAN"),
            (e[(e.GENERIC_AUTOMATED_SAFETY_ACTION = 12)] = "GENERIC_AUTOMATED_SAFETY_ACTION"),
            (e[(e.GENERIC_MANUAL_SAFETY_ACTION = 13)] = "GENERIC_MANUAL_SAFETY_ACTION"),
            (e[(e.BANNED_USER_BACKFILL = 14)] = "BANNED_USER_BACKFILL"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e[(e.ANNOTATION_UNSPECIFIED = 0)] = "ANNOTATION_UNSPECIFIED"),
            (e[(e.SPAMMER = 1)] = "SPAMMER"),
            (e[(e.SELF_DELETED = 2)] = "SELF_DELETED"),
            (e[(e.SELF_DISABLED = 3)] = "SELF_DISABLED"),
            (e[(e.UNDERAGE_DELETED = 4)] = "UNDERAGE_DELETED"),
            (e[(e.SAFETY_POLICY_VIOLATION = 5)] = "SAFETY_POLICY_VIOLATION"),
            (e[(e.INACTIVITY_DELETED = 6)] = "INACTIVITY_DELETED"),
            (e[(e.GENERIC_DELETED = 7)] = "GENERIC_DELETED"),
            e
        );
    })({});
class _ extends a.G {
    constructor() {
        super("discord_protos.safety_common.v1.NormalState", []);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        return r ?? this.create();
    }
    internalBinaryWrite(e, t, n) {
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let f = new _();
class p extends a.G {
    constructor() {
        super("discord_protos.safety_common.v1.RestrictedState", [
            { no: 1, name: "restricted_until", kind: "message", T: () => u.D },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.restrictedUntil = u.D.internalBinaryRead(e, e.uint32(), n, s.restrictedUntil);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.restrictedUntil &&
            u.D.internalBinaryWrite(e.restrictedUntil, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let h = new p();
class m extends a.G {
    constructor() {
        super("discord_protos.safety_common.v1.DeferredActionState", [
            { no: 1, name: "action_deferred_until", kind: "message", T: () => u.D },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.actionDeferredUntil = u.D.internalBinaryRead(e, e.uint32(), n, s.actionDeferredUntil);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.actionDeferredUntil &&
            u.D.internalBinaryWrite(e.actionDeferredUntil, t.tag(1, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let E = new m();
class g extends a.G {
    constructor() {
        super("discord_protos.safety_common.v1.TempBannedState", [
            { no: 1, name: "banned_until", kind: "message", T: () => u.D },
            {
                no: 2,
                name: "classification_types",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.safety_common.v1.ClassificationType", l.N],
            },
        ]);
    }
    create(e) {
        let t = { classificationTypes: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.bannedUntil = u.D.internalBinaryRead(e, e.uint32(), n, s.bannedUntil);
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.classificationTypes.push(e.int32());
                    else s.classificationTypes.push(e.int32());
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (
            (e.bannedUntil && u.D.internalBinaryWrite(e.bannedUntil, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.classificationTypes.length)
        ) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.classificationTypes.length; n++) t.int32(e.classificationTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let A = new g();
class I extends a.G {
    constructor() {
        super("discord_protos.safety_common.v1.BannedState", [
            {
                no: 1,
                name: "classification_types",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.safety_common.v1.ClassificationType", l.N],
            },
        ]);
    }
    create(e) {
        let t = { classificationTypes: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) s.classificationTypes.push(e.int32());
                else s.classificationTypes.push(e.int32());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (e.classificationTypes.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.classificationTypes.length; n++) t.int32(e.classificationTypes[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let T = new I();
class S extends a.G {
    constructor() {
        super("discord_protos.safety_common.v1.SafetyState", [
            { no: 101, name: "normal", kind: "message", oneof: "state", T: () => f },
            { no: 102, name: "restricted", kind: "message", oneof: "state", T: () => h },
            { no: 103, name: "deferred_action", kind: "message", oneof: "state", T: () => E },
            { no: 104, name: "temp_banned", kind: "message", oneof: "state", T: () => A },
            { no: 105, name: "banned", kind: "message", oneof: "state", T: () => T },
            { no: 1, name: "reason", kind: "enum", T: () => ["discord_protos.safety_common.v1.SafetyStateReason", c] },
            {
                no: 2,
                name: "annotations",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.safety_common.v1.SafetyAnnotations", d],
            },
            { no: 3, name: "last_mutation_id", kind: "message", T: () => o.ol },
        ]);
    }
    create(e) {
        let t = { state: { oneofKind: void 0 }, reason: 0, annotations: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 101:
                    s.state = { oneofKind: "normal", normal: f.internalBinaryRead(e, e.uint32(), n, s.state.normal) };
                    break;
                case 102:
                    s.state = {
                        oneofKind: "restricted",
                        restricted: h.internalBinaryRead(e, e.uint32(), n, s.state.restricted),
                    };
                    break;
                case 103:
                    s.state = {
                        oneofKind: "deferredAction",
                        deferredAction: E.internalBinaryRead(e, e.uint32(), n, s.state.deferredAction),
                    };
                    break;
                case 104:
                    s.state = {
                        oneofKind: "tempBanned",
                        tempBanned: A.internalBinaryRead(e, e.uint32(), n, s.state.tempBanned),
                    };
                    break;
                case 105:
                    s.state = { oneofKind: "banned", banned: T.internalBinaryRead(e, e.uint32(), n, s.state.banned) };
                    break;
                case 1:
                    s.reason = e.int32();
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.annotations.push(e.int32());
                    else s.annotations.push(e.int32());
                    break;
                case 3:
                    s.lastMutationId = o.ol.internalBinaryRead(e, e.uint32(), n, s.lastMutationId);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, l);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (
            ("normal" === e.state.oneofKind &&
                f.internalBinaryWrite(e.state.normal, t.tag(101, r.O0.LengthDelimited).fork(), n).join(),
            "restricted" === e.state.oneofKind &&
                h.internalBinaryWrite(e.state.restricted, t.tag(102, r.O0.LengthDelimited).fork(), n).join(),
            "deferredAction" === e.state.oneofKind &&
                E.internalBinaryWrite(e.state.deferredAction, t.tag(103, r.O0.LengthDelimited).fork(), n).join(),
            "tempBanned" === e.state.oneofKind &&
                A.internalBinaryWrite(e.state.tempBanned, t.tag(104, r.O0.LengthDelimited).fork(), n).join(),
            "banned" === e.state.oneofKind &&
                T.internalBinaryWrite(e.state.banned, t.tag(105, r.O0.LengthDelimited).fork(), n).join(),
            0 !== e.reason && t.tag(1, r.O0.Varint).int32(e.reason),
            e.annotations.length)
        ) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.annotations.length; n++) t.int32(e.annotations[n]);
            t.join();
        }
        e.lastMutationId && o.ol.internalBinaryWrite(e.lastMutationId, t.tag(3, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let y = new S();
