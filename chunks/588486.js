n.d(t, {
    dR: () => d,
    qK: () => h,
}),
    n(980754),
    n(388685),
    n(953529),
    n(539854),
    n(415506);
var r = n(230367),
    i = n(320215),
    a = n(240773),
    o = n(495852),
    s = n(552018),
    l = n(381499),
    c = n(835913),
    u = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.USER = 1)] = "USER"),
            (e[(e.INSTALLATION = 2)] = "INSTALLATION"),
            (e[(e.GUILD = 3)] = "GUILD"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e[(e.SURFACE_UNSPECIFIED = 0)] = "SURFACE_UNSPECIFIED"),
            (e[(e.API = 1)] = "API"),
            (e[(e.APP = 2)] = "APP"),
            (e[(e.DEVELOPER_PORTAL = 3)] = "DEVELOPER_PORTAL"),
            (e[(e.ADMIN_PANEL = 4)] = "ADMIN_PANEL"),
            (e[(e.ADS_BUDGET_AB = 5)] = "ADS_BUDGET_AB"),
            e
        );
    })({}),
    f = (function (e) {
        return (e[(e.ENABLED = 0)] = "ENABLED"), (e[(e.DISABLED = 1)] = "DISABLED"), e;
    })({}),
    p = (function (e) {
        return (
            (e[(e.FULL = 0)] = "FULL"),
            (e[(e.FORCE_CONTROL = 3)] = "FORCE_CONTROL"),
            (e[(e.OVERRIDES_ONLY = 4)] = "OVERRIDES_ONLY"),
            (e[(e.OFF = 5)] = "OFF"),
            e
        );
    })({}),
    _ = (function (e) {
        return (e[(e.DEFAULT = 0)] = "DEFAULT"), (e[(e.HOLDOUT = 1)] = "HOLDOUT"), e;
    })({}),
    h = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.CONTROL = 1)] = "CONTROL"),
            (e[(e.TREATMENT = 2)] = "TREATMENT"),
            (e[(e.OVERRIDE = 3)] = "OVERRIDE"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.ACTIVE = 1)] = "ACTIVE"),
            (e[(e.UNUSED = 2)] = "UNUSED"),
            (e[(e.BURNED = 3)] = "BURNED"),
            (e[(e.PRESERVED = 4)] = "PRESERVED"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.UNSPECIFIED = 0)] = "UNSPECIFIED"),
            (e[(e.DRAFT = 1)] = "DRAFT"),
            (e[(e.MEASUREMENT = 2)] = "MEASUREMENT"),
            (e[(e.ROLLING_OUT = 4)] = "ROLLING_OUT"),
            (e[(e.ARCHIVED = 6)] = "ARCHIVED"),
            (e[(e.AA_MODE = 7)] = "AA_MODE"),
            e
        );
    })({});
class E extends o.C {
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
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
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
                    a.id = e.fixed64().toString();
                    break;
                case 2:
                    a.name = e.string();
                    break;
                case 3:
                    a.createdAt = c.E.internalBinaryRead(e, e.uint32(), n, a.createdAt);
                    break;
                case 4:
                    a.creatorId = e.fixed64().toString();
                    break;
                case 5:
                    a.version = e.int32();
                    break;
                case 6:
                    a.editedAt = c.E.internalBinaryRead(e, e.uint32(), n, a.editedAt);
                    break;
                case 7:
                    a.editorId = e.fixed64().toString();
                    break;
                case 8:
                    a.title = e.string();
                    break;
                case 9:
                    a.description = e.string();
                    break;
                case 10:
                    a.hypothesis = l.Gm.internalBinaryRead(e, e.uint32(), n, a.hypothesis);
                    break;
                case 11:
                    a.techSpecLink = l.Gm.internalBinaryRead(e, e.uint32(), n, a.techSpecLink);
                    break;
                case 12:
                    a.revision = e.int32();
                    break;
                case 13:
                    a.hashKey = e.string();
                    break;
                case 14:
                    a.unitType = e.int32();
                    break;
                case 15:
                    a.variations.push(y.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 16:
                    a.rules.push(s.$9.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 18:
                    a.phase = e.int32();
                    break;
                case 19:
                    if (i === r.TD.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.surfaces.push(e.int32());
                    else a.surfaces.push(e.int32());
                    break;
                case 20:
                    a.owningTeamId = e.string();
                    break;
                case 21:
                    a.cachedNotificationChannelId = e.fixed64().toString();
                    break;
                case 22:
                    a.exposureTracking = e.int32();
                    break;
                case 25:
                    a.assignmentMode = e.int32();
                    break;
                case 23:
                    a.enableEditRawJsonUi = e.bool();
                    break;
                case 24:
                    a.winningVariationId = e.int32();
                    break;
                case 34:
                    a.extraOutcomeContext = e.string();
                    break;
                case 26:
                    a.type = e.int32();
                    break;
                case 27:
                    a.isTemplate = e.bool();
                    break;
                case 28:
                    if (i === r.TD.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.fieldNumbersToCopy.push(e.int32());
                    else a.fieldNumbersToCopy.push(e.int32());
                    break;
                case 29:
                    a.engineFeatureFlags.push(e.string());
                    break;
                case 30:
                    a.debugConfig = I.internalBinaryRead(e, e.uint32(), n, a.debugConfig);
                    break;
                case 31:
                    a.expectedEndDate = c.E.internalBinaryRead(e, e.uint32(), n, a.expectedEndDate);
                    break;
                case 32:
                    a.isAutomatedChange = e.bool();
                    break;
                case 33:
                    a.archiveAt = c.E.internalBinaryRead(e, e.uint32(), n, a.archiveAt);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let u = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, u);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        "0" !== e.id && t.tag(1, r.TD.Bit64).fixed64(e.id),
            "" !== e.name && t.tag(2, r.TD.LengthDelimited).string(e.name),
            e.createdAt && c.E.internalBinaryWrite(e.createdAt, t.tag(3, r.TD.LengthDelimited).fork(), n).join(),
            "0" !== e.creatorId && t.tag(4, r.TD.Bit64).fixed64(e.creatorId),
            0 !== e.version && t.tag(5, r.TD.Varint).int32(e.version),
            e.editedAt && c.E.internalBinaryWrite(e.editedAt, t.tag(6, r.TD.LengthDelimited).fork(), n).join(),
            "0" !== e.editorId && t.tag(7, r.TD.Bit64).fixed64(e.editorId),
            "" !== e.title && t.tag(8, r.TD.LengthDelimited).string(e.title),
            "" !== e.description && t.tag(9, r.TD.LengthDelimited).string(e.description),
            e.hypothesis && l.Gm.internalBinaryWrite(e.hypothesis, t.tag(10, r.TD.LengthDelimited).fork(), n).join(),
            e.techSpecLink &&
                l.Gm.internalBinaryWrite(e.techSpecLink, t.tag(11, r.TD.LengthDelimited).fork(), n).join(),
            0 !== e.revision && t.tag(12, r.TD.Varint).int32(e.revision),
            "" !== e.hashKey && t.tag(13, r.TD.LengthDelimited).string(e.hashKey),
            0 !== e.unitType && t.tag(14, r.TD.Varint).int32(e.unitType);
        for (let i = 0; i < e.variations.length; i++)
            y.internalBinaryWrite(e.variations[i], t.tag(15, r.TD.LengthDelimited).fork(), n).join();
        for (let i = 0; i < e.rules.length; i++)
            s.$9.internalBinaryWrite(e.rules[i], t.tag(16, r.TD.LengthDelimited).fork(), n).join();
        if ((0 !== e.phase && t.tag(18, r.TD.Varint).int32(e.phase), e.surfaces.length)) {
            t.tag(19, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.surfaces.length; n++) t.int32(e.surfaces[n]);
            t.join();
        }
        if (
            ("" !== e.owningTeamId && t.tag(20, r.TD.LengthDelimited).string(e.owningTeamId),
            "0" !== e.cachedNotificationChannelId && t.tag(21, r.TD.Bit64).fixed64(e.cachedNotificationChannelId),
            0 !== e.exposureTracking && t.tag(22, r.TD.Varint).int32(e.exposureTracking),
            0 !== e.assignmentMode && t.tag(25, r.TD.Varint).int32(e.assignmentMode),
            !1 !== e.enableEditRawJsonUi && t.tag(23, r.TD.Varint).bool(e.enableEditRawJsonUi),
            0 !== e.winningVariationId && t.tag(24, r.TD.Varint).int32(e.winningVariationId),
            "" !== e.extraOutcomeContext && t.tag(34, r.TD.LengthDelimited).string(e.extraOutcomeContext),
            0 !== e.type && t.tag(26, r.TD.Varint).int32(e.type),
            !1 !== e.isTemplate && t.tag(27, r.TD.Varint).bool(e.isTemplate),
            e.fieldNumbersToCopy.length)
        ) {
            t.tag(28, r.TD.LengthDelimited).fork();
            for (let n = 0; n < e.fieldNumbersToCopy.length; n++) t.int32(e.fieldNumbersToCopy[n]);
            t.join();
        }
        for (let n = 0; n < e.engineFeatureFlags.length; n++)
            t.tag(29, r.TD.LengthDelimited).string(e.engineFeatureFlags[n]);
        e.debugConfig && I.internalBinaryWrite(e.debugConfig, t.tag(30, r.TD.LengthDelimited).fork(), n).join(),
            e.expectedEndDate &&
                c.E.internalBinaryWrite(e.expectedEndDate, t.tag(31, r.TD.LengthDelimited).fork(), n).join(),
            !1 !== e.isAutomatedChange && t.tag(32, r.TD.Varint).bool(e.isAutomatedChange),
            e.archiveAt && c.E.internalBinaryWrite(e.archiveAt, t.tag(33, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.discord_experimentation.v1.Experiment", [
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 2,
                name: "name",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "created_at",
                kind: "message",
                T: () => c.E,
            },
            {
                no: 4,
                name: "creator_id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 5,
                name: "version",
                kind: "scalar",
                T: 5,
            },
            {
                no: 6,
                name: "edited_at",
                kind: "message",
                T: () => c.E,
            },
            {
                no: 7,
                name: "editor_id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 8,
                name: "title",
                kind: "scalar",
                T: 9,
            },
            {
                no: 9,
                name: "description",
                kind: "scalar",
                T: 9,
            },
            {
                no: 10,
                name: "hypothesis",
                kind: "message",
                T: () => l.Gm,
            },
            {
                no: 11,
                name: "tech_spec_link",
                kind: "message",
                T: () => l.Gm,
            },
            {
                no: 12,
                name: "revision",
                kind: "scalar",
                T: 5,
            },
            {
                no: 13,
                name: "hash_key",
                kind: "scalar",
                T: 9,
            },
            {
                no: 14,
                name: "unit_type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.UnitType", u],
            },
            {
                no: 15,
                name: "variations",
                kind: "message",
                repeat: 1,
                T: () => y,
            },
            {
                no: 16,
                name: "rules",
                kind: "message",
                repeat: 1,
                T: () => s.$9,
            },
            {
                no: 18,
                name: "phase",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Phase", g],
            },
            {
                no: 19,
                name: "surfaces",
                kind: "enum",
                repeat: 1,
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Surface", d],
            },
            {
                no: 20,
                name: "owning_team_id",
                kind: "scalar",
                T: 9,
            },
            {
                no: 21,
                name: "cached_notification_channel_id",
                kind: "scalar",
                T: 6,
            },
            {
                no: 22,
                name: "exposure_tracking",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.ExposureTracking", f],
            },
            {
                no: 25,
                name: "assignment_mode",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.AssignmentMode", p],
            },
            {
                no: 23,
                name: "enable_edit_raw_json_ui",
                kind: "scalar",
                T: 8,
            },
            {
                no: 24,
                name: "winning_variation_id",
                kind: "scalar",
                T: 5,
            },
            {
                no: 34,
                name: "extra_outcome_context",
                kind: "scalar",
                T: 9,
            },
            {
                no: 26,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Experiment.Type", _],
            },
            {
                no: 27,
                name: "is_template",
                kind: "scalar",
                T: 8,
            },
            {
                no: 28,
                name: "field_numbers_to_copy",
                kind: "scalar",
                repeat: 1,
                T: 5,
            },
            {
                no: 29,
                name: "engine_feature_flags",
                kind: "scalar",
                repeat: 2,
                T: 9,
            },
            {
                no: 30,
                name: "debug_config",
                kind: "message",
                T: () => I,
            },
            {
                no: 31,
                name: "expected_end_date",
                kind: "message",
                T: () => c.E,
            },
            {
                no: 32,
                name: "is_automated_change",
                kind: "scalar",
                T: 8,
            },
            {
                no: 33,
                name: "archive_at",
                kind: "message",
                T: () => c.E,
            },
        ]);
    }
}
new E();
class b extends o.C {
    create(e) {
        let t = {
            id: 0,
            label: "",
            targetAllocation: 0,
            buckets: [],
            type: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
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
                    a.id = e.int32();
                    break;
                case 2:
                    a.label = e.string();
                    break;
                case 3:
                    a.targetAllocation = e.int32();
                    break;
                case 4:
                    a.buckets.push(v.internalBinaryRead(e, e.uint32(), n));
                    break;
                case 5:
                    a.type = e.int32();
                    break;
                case 6:
                    a.configuration = l.Gm.internalBinaryRead(e, e.uint32(), n, a.configuration);
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.id && t.tag(1, r.TD.Varint).int32(e.id),
            "" !== e.label && t.tag(2, r.TD.LengthDelimited).string(e.label),
            0 !== e.targetAllocation && t.tag(3, r.TD.Varint).int32(e.targetAllocation);
        for (let i = 0; i < e.buckets.length; i++)
            v.internalBinaryWrite(e.buckets[i], t.tag(4, r.TD.LengthDelimited).fork(), n).join();
        0 !== e.type && t.tag(5, r.TD.Varint).int32(e.type),
            e.configuration &&
                l.Gm.internalBinaryWrite(e.configuration, t.tag(6, r.TD.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.discord_experimentation.v1.Variation", [
            {
                no: 1,
                name: "id",
                kind: "scalar",
                T: 5,
            },
            {
                no: 2,
                name: "label",
                kind: "scalar",
                T: 9,
            },
            {
                no: 3,
                name: "target_allocation",
                kind: "scalar",
                T: 5,
            },
            {
                no: 4,
                name: "buckets",
                kind: "message",
                repeat: 1,
                T: () => v,
            },
            {
                no: 5,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Variation.Type", h],
            },
            {
                no: 6,
                name: "configuration",
                kind: "message",
                T: () => l.Gm,
            },
        ]);
    }
}
let y = new b();
class O extends o.C {
    create(e) {
        let t = {
            start: 0,
            stop: 0,
            type: 0,
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
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
                    a.start = e.int32();
                    break;
                case 2:
                    a.stop = e.int32();
                    break;
                case 3:
                    a.type = e.int32();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.start && t.tag(1, r.TD.Varint).int32(e.start),
            0 !== e.stop && t.tag(2, r.TD.Varint).int32(e.stop),
            0 !== e.type && t.tag(3, r.TD.Varint).int32(e.type);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.discord_experimentation.v1.Bucket", [
            {
                no: 1,
                name: "start",
                kind: "scalar",
                T: 5,
            },
            {
                no: 2,
                name: "stop",
                kind: "scalar",
                T: 5,
            },
            {
                no: 3,
                name: "type",
                kind: "enum",
                T: () => ["discord_protos.discord_experimentation.v1.Bucket.Type", m],
            },
        ]);
    }
}
let v = new O();
class S extends o.C {
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
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this,
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
                    a.enableDecisionLogging = e.bool();
                    break;
                case 2:
                    a.metricsSampleRate = e.double();
                    break;
                case 3:
                    a.logContextOnFailure = e.bool();
                    break;
                case 4:
                    a.logRawHeaders = e.bool();
                    break;
                case 5:
                    a.tagFilterMetrics = e.bool();
                    break;
                case 6:
                    a.decisionLogSampleRate = e.double();
                    break;
                default:
                    let o = n.readUnknownField;
                    if ("throw" === o)
                        throw new globalThis.Error(
                            "Unknown field ".concat(t, " (wire type ").concat(i, ") for ").concat(this.typeName),
                        );
                    let s = e.skip(i);
                    !1 !== o && (!0 === o ? r.z.onRead : o)(this.typeName, a, t, i, s);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        !1 !== e.enableDecisionLogging && t.tag(1, r.TD.Varint).bool(e.enableDecisionLogging),
            0 !== e.metricsSampleRate && t.tag(2, r.TD.Bit64).double(e.metricsSampleRate),
            !1 !== e.logContextOnFailure && t.tag(3, r.TD.Varint).bool(e.logContextOnFailure),
            !1 !== e.logRawHeaders && t.tag(4, r.TD.Varint).bool(e.logRawHeaders),
            !1 !== e.tagFilterMetrics && t.tag(5, r.TD.Varint).bool(e.tagFilterMetrics),
            0 !== e.decisionLogSampleRate && t.tag(6, r.TD.Bit64).double(e.decisionLogSampleRate);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.z.onWrite : i)(this.typeName, e, t), t;
    }
    constructor() {
        super("discord_protos.discord_experimentation.v1.DebugConfig", [
            {
                no: 1,
                name: "enable_decision_logging",
                kind: "scalar",
                T: 8,
            },
            {
                no: 2,
                name: "metrics_sample_rate",
                kind: "scalar",
                T: 1,
            },
            {
                no: 3,
                name: "log_context_on_failure",
                kind: "scalar",
                T: 8,
            },
            {
                no: 4,
                name: "log_raw_headers",
                kind: "scalar",
                T: 8,
            },
            {
                no: 5,
                name: "tag_filter_metrics",
                kind: "scalar",
                T: 8,
            },
            {
                no: 6,
                name: "decision_log_sample_rate",
                kind: "scalar",
                T: 1,
            },
        ]);
    }
}
let I = new S();
