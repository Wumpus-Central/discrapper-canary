"use strict";
n.d(t, { ew: () => O }), n(321073);
var r,
    i,
    s = n(852015),
    a = n(144367),
    o = n(428420),
    l = n(324281),
    u = n(406935),
    d = n(56426),
    c = n(335871),
    _ =
        (((r = {})[(r.REASON_UNSPECIFIED = 0)] = "REASON_UNSPECIFIED"),
        (r[(r.DISABLED_SUSPICIOUS_ACTIVITY = 1)] = "DISABLED_SUSPICIOUS_ACTIVITY"),
        (r[(r.SMITE_REMOVE_EMAIL_VERIFICATION = 2)] = "SMITE_REMOVE_EMAIL_VERIFICATION"),
        (r[(r.USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT = 3)] =
            "USER_REQUIRED_VERIFICATION_INTERVENTIONS_CLIENT"),
        (r[(r.ACTIVE_ASSIGNMENT_COMPLETED = 4)] = "ACTIVE_ASSIGNMENT_COMPLETED"),
        (r[(r.ACTIVE_ASSIGNMENT_CREATED = 5)] = "ACTIVE_ASSIGNMENT_CREATED"),
        (r[(r.DEFERRED_ASSIGNMENT_CREATED = 6)] = "DEFERRED_ASSIGNMENT_CREATED"),
        (r[(r.DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE = 7)] = "DEFERRED_ASSIGNMENT_UPGRADED_TO_ACTIVE"),
        (r[(r.DEFERRED_ASSIGNMENT_CANCELLED = 8)] = "DEFERRED_ASSIGNMENT_CANCELLED"),
        (r[(r.ASSIGNMENT_STATE_REPAIRED = 9)] = "ASSIGNMENT_STATE_REPAIRED"),
        (r[(r.MANUAL_PERMANENT_BAN = 10)] = "MANUAL_PERMANENT_BAN"),
        (r[(r.SAFETY_SYSTEM_UNBAN = 11)] = "SAFETY_SYSTEM_UNBAN"),
        (r[(r.GENERIC_AUTOMATED_SAFETY_ACTION = 12)] = "GENERIC_AUTOMATED_SAFETY_ACTION"),
        (r[(r.GENERIC_MANUAL_SAFETY_ACTION = 13)] = "GENERIC_MANUAL_SAFETY_ACTION"),
        (r[(r.BANNED_USER_BACKFILL = 14)] = "BANNED_USER_BACKFILL"),
        r),
    f =
        (((i = {})[(i.ANNOTATION_UNSPECIFIED = 0)] = "ANNOTATION_UNSPECIFIED"),
        (i[(i.SPAMMER = 1)] = "SPAMMER"),
        (i[(i.SELF_DELETED = 2)] = "SELF_DELETED"),
        (i[(i.SELF_DISABLED = 3)] = "SELF_DISABLED"),
        (i[(i.UNDERAGE_DELETED = 4)] = "UNDERAGE_DELETED"),
        (i[(i.SAFETY_POLICY_VIOLATION = 5)] = "SAFETY_POLICY_VIOLATION"),
        (i[(i.INACTIVITY_DELETED = 6)] = "INACTIVITY_DELETED"),
        (i[(i.GENERIC_DELETED = 7)] = "GENERIC_DELETED"),
        i);
class E extends l.G {
    constructor() {
        super("discord_protos.safety_common.v1.NormalState", []);
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
        return r ?? this.create();
    }
    internalBinaryWrite(e, t, n) {
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let h = new E();
class p extends l.G {
    constructor() {
        super("discord_protos.safety_common.v1.RestrictedState", [
            { no: 1, name: "restricted_until", kind: "message", T: () => c.D },
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
            if (1 === t) i.restrictedUntil = c.D.internalBinaryRead(e, e.uint32(), n, i.restrictedUntil);
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
        e.restrictedUntil &&
            c.D.internalBinaryWrite(e.restrictedUntil, t.tag(1, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let m = new p();
class g extends l.G {
    constructor() {
        super("discord_protos.safety_common.v1.DeferredActionState", [
            { no: 1, name: "action_deferred_until", kind: "message", T: () => c.D },
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
            if (1 === t) i.actionDeferredUntil = c.D.internalBinaryRead(e, e.uint32(), n, i.actionDeferredUntil);
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
        e.actionDeferredUntil &&
            c.D.internalBinaryWrite(e.actionDeferredUntil, t.tag(1, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let A = new g();
class I extends l.G {
    constructor() {
        super("discord_protos.safety_common.v1.TempBannedState", [
            { no: 1, name: "banned_until", kind: "message", T: () => c.D },
            {
                no: 2,
                name: "classification_types",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.safety_common.v1.ClassificationType", d.N],
            },
        ]);
    }
    create(e) {
        let t = { classificationTypes: [] };
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
                    i.bannedUntil = c.D.internalBinaryRead(e, e.uint32(), n, i.bannedUntil);
                    break;
                case 2:
                    if (r === s.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.classificationTypes.push(e.int32());
                    else i.classificationTypes.push(e.int32());
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
            (e.bannedUntil && c.D.internalBinaryWrite(e.bannedUntil, t.tag(1, s.O0.LengthDelimited).fork(), n).join(),
            e.classificationTypes.length)
        ) {
            t.tag(2, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.classificationTypes.length; n++) t.int32(e.classificationTypes[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let T = new I();
class S extends l.G {
    constructor() {
        super("discord_protos.safety_common.v1.BannedState", [
            {
                no: 1,
                name: "classification_types",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.safety_common.v1.ClassificationType", d.N],
            },
        ]);
    }
    create(e) {
        let t = { classificationTypes: [] };
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
                    for (let t = e.int32() + e.pos; e.pos < t; ) i.classificationTypes.push(e.int32());
                else i.classificationTypes.push(e.int32());
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
        if (e.classificationTypes.length) {
            t.tag(1, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.classificationTypes.length; n++) t.int32(e.classificationTypes[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let y = new S();
class N extends l.G {
    constructor() {
        super("discord_protos.safety_common.v1.SafetyState", [
            { no: 101, name: "normal", kind: "message", oneof: "state", T: () => h },
            { no: 102, name: "restricted", kind: "message", oneof: "state", T: () => m },
            { no: 103, name: "deferred_action", kind: "message", oneof: "state", T: () => A },
            { no: 104, name: "temp_banned", kind: "message", oneof: "state", T: () => T },
            { no: 105, name: "banned", kind: "message", oneof: "state", T: () => y },
            { no: 1, name: "reason", kind: "enum", T: () => ["discord_protos.safety_common.v1.SafetyStateReason", _] },
            {
                no: 2,
                name: "annotations",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.safety_common.v1.SafetyAnnotations", f],
            },
            { no: 3, name: "last_mutation_id", kind: "message", T: () => u.ol },
        ]);
    }
    create(e) {
        let t = { state: { oneofKind: void 0 }, reason: 0, annotations: [] };
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
                case 101:
                    i.state = { oneofKind: "normal", normal: h.internalBinaryRead(e, e.uint32(), n, i.state.normal) };
                    break;
                case 102:
                    i.state = {
                        oneofKind: "restricted",
                        restricted: m.internalBinaryRead(e, e.uint32(), n, i.state.restricted),
                    };
                    break;
                case 103:
                    i.state = {
                        oneofKind: "deferredAction",
                        deferredAction: A.internalBinaryRead(e, e.uint32(), n, i.state.deferredAction),
                    };
                    break;
                case 104:
                    i.state = {
                        oneofKind: "tempBanned",
                        tempBanned: T.internalBinaryRead(e, e.uint32(), n, i.state.tempBanned),
                    };
                    break;
                case 105:
                    i.state = { oneofKind: "banned", banned: y.internalBinaryRead(e, e.uint32(), n, i.state.banned) };
                    break;
                case 1:
                    i.reason = e.int32();
                    break;
                case 2:
                    if (r === s.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) i.annotations.push(e.int32());
                    else i.annotations.push(e.int32());
                    break;
                case 3:
                    i.lastMutationId = u.ol.internalBinaryRead(e, e.uint32(), n, i.lastMutationId);
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
            ("normal" === e.state.oneofKind &&
                h.internalBinaryWrite(e.state.normal, t.tag(101, s.O0.LengthDelimited).fork(), n).join(),
            "restricted" === e.state.oneofKind &&
                m.internalBinaryWrite(e.state.restricted, t.tag(102, s.O0.LengthDelimited).fork(), n).join(),
            "deferredAction" === e.state.oneofKind &&
                A.internalBinaryWrite(e.state.deferredAction, t.tag(103, s.O0.LengthDelimited).fork(), n).join(),
            "tempBanned" === e.state.oneofKind &&
                T.internalBinaryWrite(e.state.tempBanned, t.tag(104, s.O0.LengthDelimited).fork(), n).join(),
            "banned" === e.state.oneofKind &&
                y.internalBinaryWrite(e.state.banned, t.tag(105, s.O0.LengthDelimited).fork(), n).join(),
            0 !== e.reason && t.tag(1, s.O0.Varint).int32(e.reason),
            e.annotations.length)
        ) {
            t.tag(2, s.O0.LengthDelimited).fork();
            for (let n = 0; n < e.annotations.length; n++) t.int32(e.annotations[n]);
            t.join();
        }
        e.lastMutationId && u.ol.internalBinaryWrite(e.lastMutationId, t.tag(3, s.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? s.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let O = new N();
